import { Component, OnInit } from '@angular/core';
import { SellerDashboardService } from '../../../services/seller-dashboard.service';

@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.page.html',
  styleUrls: ['./generate-bill.page.scss'],
})
export class GenerateBillPage implements OnInit {
  showGenerateBill = true;
  showPastBills = false;
  showPreviewBill = false;
  billData = [];
  buyersData = [];
  apiBodyData = {};
  previewBill = {};

  customErrorMessage = String;
  constructor(
    private sellerApiService: SellerDashboardService
  ) { }

  ngOnInit() {
    this.onBillFetch();
    this.onBuyerSellerFetch();
  }

  viewChanged(ev){
    if(ev.detail.value === 'generate'){
      this.showGenerateBill = true;
      this.showPastBills = false;
    }
    if(ev.detail.value === 'past'){
      this.showPastBills = true;
      this.showGenerateBill = false;
    }
  }

  onBillFetch(){
    this.sellerApiService.fetchBills().subscribe((response: any) => {
      console.log(response);
      this.billData =response.data;
      console.log(this.billData)
    }, error => {
      this.customErrorMessage = error;
    });
  }

  onBuyerSellerFetch(){
    this.sellerApiService.fetchByuerSellerRelation().subscribe((response: any) => {
      console.log(response);
      this.buyersData = response.data;
      console.log(this.buyersData)
    }, error => {
      this.customErrorMessage = error;
    });
  }

  onBillPreview(){
    if(Object.keys(this.apiBodyData).length === 0 ){
      return;
    }
    this.sellerApiService.previewBill(this.apiBodyData).subscribe((response: any) => {
      this.previewBill = response;
      this.previewBill['items']=[...response.dailySales];
      response.bookings.map(booking=>{
        this.previewBill["items"] =[...this.previewBill["items"], ...booking.bookingDetails];
      })
      console.log(this.previewBill)
    this.showPreviewBill = true;

    }, error => {
      this.customErrorMessage = error;
    });

  }
  
  calculateOrderTotal(billItems: any[]): number {
    let total = 0;
    billItems.map(billItem => {
      total = total + billItem.productTotalPrice;
    })
    return total;
  }
  onSelectBuyer(event){
    this.apiBodyData["buyerUserIdFK"] = event.detail.value.buyerUserIdFK; 
    this.apiBodyData["sellerUserIdFK"] = event.detail.value.sellerUserIdFK; 
  }

  onSelectstartDate(event){
    this.apiBodyData["startDate"] = event.detail.value.split("-")[0]+"-"+ event.detail.value.split("-")[1] +"-"+"01";
    this.apiBodyData["endDate"] = event.detail.value.split("-")[0]+"-"+ event.detail.value.split("-")[1] +"-"+"31";
  }
}
