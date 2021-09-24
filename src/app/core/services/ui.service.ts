import { Injectable } from '@angular/core';
import { ToastController, LoadingController, AlertController, ActionSheetController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { TOAST_TIMER } from 'src/app/core/constants/widgets.constant';


@Injectable({providedIn: 'root'})
export class UiService {

  // for custom loading
  loadingChecker = new Subject();


  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    private alertController: AlertController,
    public actionSheetController: ActionSheetController,
  ) {}

  loading: any;



  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: +TOAST_TIMER
    });
    await toast.present();
  }

  async presentLoading(msg: string) {
    this.loading = await this.loadingController.create({
      message: msg,
      spinner: null,
      duration: 5000,
      translucent: false,
      cssClass: 'custom-class custom-loading'
    });
    await this.loading.present();
  }

  async dismissLoading() {
    await this.loading.dismiss();
  }

  presentAlert(header: string, subHeader: string, message: string, buttons?: any) {
    return new Promise (async (res) => {
      const alert = await this.alertController.create({
        header,
        subHeader,
        message,
        buttons
      });
      await alert.present();
    });
  }

  async presentActionSheet(message: string, buttons) {
    const actionSheet = await this.actionSheetController.create({
      header: message,
      mode: 'ios',
      cssClass: 'home-action-sheet',
      backdropDismiss: false,
      buttons
    });
    await actionSheet.present();
  }


}
