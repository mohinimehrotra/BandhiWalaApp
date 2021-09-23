/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { SellerDashboardService } from '../../../services/seller-dashboard.service';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.page.html',
  styleUrls: ['./seller-home.page.scss'],
})
export class SellerHomePage implements OnInit {

  constructor(
    private sellerDashboardService: SellerDashboardService
  ) { }

  ngOnInit() {
    this.sellerDashboardService.toggleMenuView(true);
    
  }

}
