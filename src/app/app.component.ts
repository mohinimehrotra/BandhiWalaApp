import { Component } from '@angular/core';
import { menuController } from "@ionic/core";
import { UiService } from './core/services/ui.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  activePageTitle = 'Home';

  Pages = [
    {
      title: 'Home',
      url: '/seller/home',
      icon: 'home'
    },
    {
      title: 'Products',
      url: '/seller/product-list',
      icon: 'bag'
    },
    {
      title: 'Buyers',
      url: '/seller/buyers-list',
      icon: 'people'
    },
    {
      title: 'Advance Bookings',
      url: '/seller/advance-bookings',
      icon: 'cart'
    },
    {
      title: 'Upload Sales Figures',
      url: '/seller/add-sales-entry',
      icon: 'duplicate'
    },
    {
      title: 'Bill Management',
      url: '/seller/generate-bill',
      icon: 'newspaper'
    },
    {
      title: 'Payments',
      url: '/seller/payment-history',
      icon: 'cash'
    },
    {
      title: 'Profile',
      url: '/seller/my-profile',
      icon: 'person'
    },
    {
      title: 'Reports',
      url: '/register',
      icon: 'bar-chart'
    },
    {
      title: 'Invite',
      url: '/invite',
      icon: 'share-social'
    },
    {
      title: 'Help',
      url: '/seller/help',
      icon: 'help'
    },
    {
      title: 'Logout',
      url: '/register',
      icon: 'log-out'
    },
  ];

  constructor(
    private uiService: UiService,
    private socialSharing: SocialSharing
  ) {
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
