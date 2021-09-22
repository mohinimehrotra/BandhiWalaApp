import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyersListPage } from '../seller-dashboard/buyers/page/buyers-list/buyers-list.page';
import { BillDetailPage } from './bills/page/bill-detail/bill-detail.page';
import { BillManagementPage } from './bills/page/bill-management/bill-management.page';
import { AddBookingsPage } from './bookings/page/add-bookings/add-bookings.page';
import { AdvanceBookingsPage } from './bookings/page/advance-bookings/advance-bookings.page';
import { BuyerHomePage } from './home/page/buyer-home/buyer-home.page';
import { MainProfilePage } from './profile/main-profile/main-profile.page';
import { EditProfilePage } from './profile/edit-profile/edit-profile.page';
import { OrderEntriesPage } from './orders/page/order-entries/order-entries.page';
import { SellerListPage } from './sellers/page/seller-list/seller-list.page';

const routes: Routes = [
  {
    path: '',
      children: [
        {
          path: 'home',
          component: BuyerHomePage
        },
        {
          path: 'bookings',
          component: AdvanceBookingsPage
        },
        {
          path: 'add-booking',
          component: AddBookingsPage
        },
        {
          path: 'bill-management',
          component: BillManagementPage
        },
        {
          path: 'bill-detail',
          component: BillDetailPage
        },
        {
          path: 'main-profile',
          component: MainProfilePage
        },
        {
          path: 'edit-profile',
          component: EditProfilePage
        },
        {
          path: 'seller-list',
          component: SellerListPage
        },
        {
          path: 'order-entries',
          component: OrderEntriesPage
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerDashboardRoutingModule { }
