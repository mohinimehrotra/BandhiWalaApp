import { Component, OnInit } from '@angular/core';
import { SellerDataModel } from '../../services/seller-dashboard.interface';
import { SellerDashboardService } from '../../services/seller-dashboard.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  SellerDataModel: SellerDataModel;

  constructor(
    private sellerApiService: SellerDashboardService
  ) { }

  ngOnInit() {
    this.onFetchProfile()
  }

  onFetchProfile(){
    this.SellerDataModel = this.sellerApiService.fetchSellerProfile()
    console.log(this.SellerDataModel)
  }
}
