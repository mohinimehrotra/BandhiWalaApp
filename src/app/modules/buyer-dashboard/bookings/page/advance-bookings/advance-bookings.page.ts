import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../../../buyer-dashboard.service';

@Component({
  selector: 'app-advance-bookings',
  templateUrl: './advance-bookings.page.html',
  styleUrls: ['./advance-bookings.page.scss'],
})
export class AdvanceBookingsPage implements OnInit {
  showActive = true;
  showRequested = false;
  constructor(
    private buyerApiService: BuyerService
  ) { }
  items = [];
  customErrorMessage: string;


  ngOnInit() {
    this.fetchBookings();
  }
  viewChange(ev){
    if(ev.detail.value === 'active'){
      this.showActive = true;
      this.showRequested = false;
    }
    if(ev.detail.value === 'requested'){
      this.showRequested = true;
      this.showActive = false;
    }
  }


  fetchBookings(){
    this.buyerApiService.fetchBooking().subscribe((response: any) => {
      console.log(response);
      this.items = response.data;
      console.log(this.items)
    }, error => {
      this.customErrorMessage = error;
    });
  }

}
