import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/core/services/ui.service';
import { Item } from 'src/app/modules/seller-dashboard/products/product-interface';
import { SellersListModel } from '../../../buyer-dashboard.interface';
import { BuyerService } from '../../../buyer-dashboard.service';

@Component({
  selector: 'app-seller-list',
  providers: [BuyerService],
  templateUrl: './seller-list.page.html',
  styleUrls: ['./seller-list.page.scss'],
})
export class SellerListPage implements OnInit {
  sellersList: SellersListModel[] = [];
  customErrorMessage: string;
  BuyerService: any;
  
  constructor(
    private buyerDashboardService: BuyerService,
    private uiService: UiService
  ) { }

  ngOnInit() {
    this.fetchRelation();
  }
  fetchRelation(){
    this.buyerDashboardService.fetchRelation().subscribe((response: any) => {
      console.log(response);
      if(response.statusCode == 200){

        this.sellersList =response.data;
        console.log(this.sellersList)
      }
    }, error => {
      this.uiService.presentToast(error);
      this.customErrorMessage = error;
    });
  }

}
