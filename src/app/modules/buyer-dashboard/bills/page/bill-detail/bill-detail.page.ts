import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BuyerService } from '../../../buyer-dashboard.service';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.page.html',
  styleUrls: ['./bill-detail.page.scss'],
})
export class BillDetailPage implements OnInit {
  byuerBillDetail: any;
  customErrorMessage: string;
  constructor(
    public alertController: AlertController,
    private buyerApiService: BuyerService,
  ) { }

  ngOnInit() {
    this.byuerBillDetail = this.buyerApiService.billDetail
    console.log(this.byuerBillDetail)
  }

  async raiseDisputeAlert(billIdFK) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Message',
      inputs: [
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Type Message...'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Raise Dispute',
          handler: (alertData) => {
            this.raiseDispute(this.byuerBillDetail.id, alertData.paragraph)
          }
        }
      ]
    });
    await alert.present();
  }

  raiseDispute(billIdFK, message){
      this.buyerApiService.createBillDispute({billIdFK: billIdFK, message: message, status:"PENDING"}).subscribe((response: any) => {
      console.log(response);
    }, error => {
      this.customErrorMessage = error;
    });
  }
}
