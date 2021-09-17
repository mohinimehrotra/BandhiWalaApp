import { Component, OnInit } from '@angular/core';
import { RUPEE_ICON } from 'src/app/core/constants/widgets.constant';
import { SellerDashboardService } from '../../../services/seller-dashboard.service';
import { Item } from '../../product-interface';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  items: Item[] = [];
  customErrorMessage: string;
  rsIcon = RUPEE_ICON;

  constructor(
    private sellerDashboardService: SellerDashboardService
  ) {}

  ngOnInit() {
    this.fetchProduct();
  }

  fetchProduct(){
    this.sellerDashboardService.fetchProduct().subscribe((response: any) => {
      console.log(response);
      this.items =response.data;
      console.log(this.items)
    }, error => {
      this.customErrorMessage = error;
    });
  }
}


