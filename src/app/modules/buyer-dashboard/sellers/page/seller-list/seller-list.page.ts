import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/core/services/ui.service';
import { SellersListModel } from '../../../buyer-dashboard.interface';
import { BuyerService } from '../../../buyer-dashboard.service';
import { ModalController } from '@ionic/angular';
import { SellerDetailModalPage } from '../seller-detail-modal/seller-detail-modal.page';

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
    public modalController: ModalController,
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

  async presentModal() {
    const modal = await this.modalController.create({
      component: SellerDetailModalPage,
      cssClass: 'seller-detail-modal',
      showBackdrop: true,
      backdropDismiss: true
      
    });
    return await modal.present();
  }
}
