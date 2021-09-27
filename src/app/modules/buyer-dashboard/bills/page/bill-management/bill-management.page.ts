import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../../../buyer-dashboard.service';

@Component({
  selector: 'app-bill-management',
  templateUrl: './bill-management.page.html',
  styleUrls: ['./bill-management.page.scss'],
})
export class BillManagementPage implements OnInit {
  billData = [];
  customErrorMessage: String;
  constructor(
    private buyerApiService: BuyerService,
  ) { }

  ngOnInit() {
    this.onBillFetch()
  }

  onBillFetch(){
    this.buyerApiService.fetchBills().subscribe((response: any) => {
      console.log(response);
      this.billData =response.data;
      console.log(this.billData)
    }, error => {
      this.customErrorMessage = error;
    });
  }

  viewBillDetail(billDetail){
    this.buyerApiService.billDetail = billDetail;
  }
}
