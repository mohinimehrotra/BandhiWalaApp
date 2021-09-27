import { Component, OnInit } from '@angular/core';
import { BuyerDataModel } from '../../buyer-dashboard.interface';
import { BuyerService } from '../../buyer-dashboard.service';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.page.html',
  styleUrls: ['./main-profile.page.scss'],
})
export class MainProfilePage implements OnInit {

  buyerData;

  constructor(
    private buyerApiService: BuyerService
  ) { }

  ngOnInit() {
    this.onFetchProfile()
  }

  onFetchProfile(){
    this.buyerData = this.buyerApiService.fetchBuyerProfile()
    console.log(this.buyerData)
  }

}
