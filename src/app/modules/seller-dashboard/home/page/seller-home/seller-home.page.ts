/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AppService } from 'src/app/app.service';
import { BOOKING_PENDING } from 'src/app/core/constants/storage.constant';
import { StorageService } from 'src/app/core/services/storage.service';
import { SellerDashboardService } from '../../../services/seller-dashboard.service';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.page.html',
  styleUrls: ['./seller-home.page.scss'],
})
export class SellerHomePage implements OnInit {

  dashboardStats = {};
  showEmpty= true;
  customErrorMessage: String;
  pendingItems = [];
  showPendingItems = false;
  userData = {};

  constructor(
    private sellerDashboardService: SellerDashboardService,
    private storageService: StorageService,
    private menuController: MenuController,
    private appService: AppService
  ) {
    appService.setSellerPages();
  }

  ngOnInit() {
    this.menuController.enable(true);
    this.sellerDashboardService.toggleMenuView(true); 
    this.onfetchDashboardStats();
    this.onFetchBookings(BOOKING_PENDING);
    this.userData = this.storageService.getSellerUserData()
  }

  onfetchDashboardStats(){
    this.sellerDashboardService.fetchDashbordStats().subscribe((response: any) => {
      console.log(response);
      this.dashboardStats = response;
      console.log(this.dashboardStats)
    }, error => {
      this.customErrorMessage = error;
    });
  }

  onFetchBookings(status){
    this.sellerDashboardService.fetchBooking({ status }).subscribe((response: any) => {
      console.log(response);
      if(status === BOOKING_PENDING){
        this.pendingItems = response.data;
        if(this.pendingItems.length){
          this.showEmpty= false;
          this.showPendingItems = true;
        }
        console.log(this.pendingItems);
      }
    }, error => {
      this.customErrorMessage = error;
    });
  }

}
