import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-seller-detail-modal',
  templateUrl: './seller-detail-modal.page.html',
  styleUrls: ['./seller-detail-modal.page.scss'],
})
export class SellerDetailModalPage implements OnInit {
    
  constructor(
    public modalController: ModalController,
      ) { }

  ngOnInit() {
    
    }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }


  
}
