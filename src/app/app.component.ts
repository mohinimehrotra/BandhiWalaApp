import { Component } from '@angular/core';
import { menuController } from "@ionic/core";
import { UiService } from './core/services/ui.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  activePageTitle = 'Home';
  activeIndex;
  pages = [];

  constructor(
    private uiService: UiService,
    private socialSharing: SocialSharing,
    private appService: AppService
  ) {
    this.pages = appService.getPages();
    appService.pages$.subscribe((res) => {
      if (res) {
        this.pages = appService.getPages();
        console.log(this.pages)
      }
    })
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

}
