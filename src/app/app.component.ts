import { Component } from '@angular/core';
import { menuController } from "@ionic/core";

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
      url: '/register',
      icon: 'people'
    },
    {
      title: 'Advance Bookings',
      url: '/register',
      icon: 'cart'
    },
    {
      title: 'Upload Sales Figures',
      url: '/register',
      icon: 'duplicate'
    },
    {
      title: 'Bill Management',
      url: '/register',
      icon: 'newspaper'
    },
    {
      title: 'Payments',
      url: '/register',
      icon: 'cash'
    },
    {
      title: 'Profile',
      url: '/register',
      icon: 'person'
    },
    {
      title: 'Reports',
      url: '/register',
      icon: 'bar-chart'
    },
    {
      title: 'Invite',
      url: '/register',
      icon: 'share-social'
    },
    {
      title: 'Help',
      url: '/register',
      icon: 'help'
    },
    {
      title: 'Logout',
      url: '/register',
      icon: 'log-out'
    },
  ];

  constructor() {}

  closeMenu() {
    menuController.toggle();
  }
}
