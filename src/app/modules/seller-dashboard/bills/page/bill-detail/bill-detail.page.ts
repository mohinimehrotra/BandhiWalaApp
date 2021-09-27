import { Component, OnInit } from '@angular/core';
import { SellerDashboardService } from '../../../services/seller-dashboard.service';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.page.html',
  styleUrls: ['./bill-detail.page.scss'],
})
export class BillDetailPage implements OnInit {
  buyerBillDetail: any;
  constructor(
    private sellerApiService: SellerDashboardService,
  ) { }

  ngOnInit() {
    this.buyerBillDetail = this.sellerApiService.billDetail;
  }

}
