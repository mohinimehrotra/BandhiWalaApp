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
      url: '/register',
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

  constructor() {
  }

  closeMenu() {
    menuController.toggle();
  }
}
