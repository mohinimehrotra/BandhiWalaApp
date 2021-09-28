import { Component } from '@angular/core';
import { menuController } from '@ionic/core';
import { UiService } from './core/services/ui.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AppService } from './app.service';
import { AlertController } from '@ionic/angular';
import { StorageService } from './core/services/storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  activePageTitle = 'Home';
  activeIndex;
  Pages = [];

  constructor(
    private uiService: UiService,
    private socialSharing: SocialSharing,
    private appService: AppService,
    private storageService: StorageService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.Pages = appService.getPages();
    appService.pages$.subscribe((res) => {
      if (res) {
        this.Pages = appService.getPages();
        console.log(this.Pages);
      }
    });
  }

  closeMenu() {
    menuController.toggle();
  }

  //for social sharing

  onInvite(){
    const message = 'Bandhiwala App\n';
    const link = 'https://link.medium.com/JA4amAHFJ5';
    this.socialSharing.share(message, 'Subject', null, link)
      .then(() => {

      }).catch((error) => {
        console.log(error);
      });
  };

  //end of social sharing
  async onLogout(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.storageService.clearSessionData();
            this.router.navigateByUrl('/auth/login');
          }
        }
      ]
    });
    alert.present();
  }
}
