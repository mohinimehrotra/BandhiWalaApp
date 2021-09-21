import { Component, OnInit } from '@angular/core';
import { BOOKING_ACCEPTED, BOOKING_PENDING } from 'src/app/core/constants/storage.constant';
import { SellerDashboardService } from '../../../services/seller-dashboard.service';

@Component({
  selector: 'app-advance-bookings',
  templateUrl: './advance-bookings.page.html',
  styleUrls: ['./advance-bookings.page.scss'],
})
export class AdvanceBookingsPage implements OnInit {
  showRequests = true;
  showConfirmed = false;
  numbers = []
  bookedItems = [];
  pendingItems = [];
  totalRequest : number;
  customErrorMessage: string;

  constructor(
    private sellerServiceApi: SellerDashboardService
  ) {
    this.numbers = Array(20).fill(1).map((x,i)=>i);
   }

  ngOnInit() {
    this.fetchBookings(BOOKING_ACCEPTED);
    this.fetchBookings(BOOKING_PENDING);
  }
  viewsChanged(ev){
    if(ev.detail.value === 'requests'){
      this.showRequests = true;
      this.showConfirmed = false;
    }
    if(ev.detail.value === 'confirmed'){
      this.showConfirmed = true;
      this.showRequests = false;
    }
  }

  fetchBookings(status){
    this.sellerServiceApi.fetchBooking({ status }).subscribe((response: any) => {
      console.log(response);
      this.totalRequest = response.totalCounts;
      if(status === BOOKING_ACCEPTED){
        this.bookedItems = response.data;
        console.log(this.bookedItems);
      }
      if(status === BOOKING_PENDING){
        this.pendingItems = response.data;
        console.log(this.pendingItems);
      }
    }, error => {
      this.customErrorMessage = error;
    });
  }

  confirmRejectBookings(status, prodId){
    this.sellerServiceApi.confirmRejectBooking({ status }, prodId).subscribe((response: any) => {
      if(response){
        this.fetchBookings(BOOKING_ACCEPTED);
        this.fetchBookings(BOOKING_PENDING);
      }
    }, error => {
      this.customErrorMessage = error;
    });
  }

  calculateOrderTotal(bookingDetails: any[]): number {
    let total = 0;
    bookingDetails.map(booking => {
      total = total + (booking.price *  booking.productQty);
    })
    return total;
  }

}
