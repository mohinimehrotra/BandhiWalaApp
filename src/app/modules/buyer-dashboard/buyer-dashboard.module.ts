import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerDashboardRoutingModule } from './buyer-dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { BuyerHomePage } from './home/page/buyer-home/buyer-home.page';
import { AdvanceBookingsPage } from './bookings/page/advance-bookings/advance-bookings.page';
import { AddBookingsPage } from './bookings/page/add-bookings/add-bookings.page';
import { BillManagementPage } from './bills/page/bill-management/bill-management.page';
import { MainProfilePage } from './profile/main-profile/main-profile.page';
import { EditProfilePage } from './profile/edit-profile/edit-profile.page';
import { OrderEntriesPage } from './orders/page/order-entries/order-entries.page';
import { RequestListPage } from './request/page/request-list/request-list.page';
import { SellerListPage } from './sellers/page/seller-list/seller-list.page';
import { BillDetailPage } from './bills/page/bill-detail/bill-detail.page';

@NgModule({
  declarations: [
    BuyerHomePage,
    AdvanceBookingsPage,
    AddBookingsPage,
    BillManagementPage,
    BillDetailPage,
    OrderEntriesPage,
    RequestListPage,
    MainProfilePage,
    EditProfilePage,
    SellerListPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    BuyerDashboardRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BuyerDashboardModule { }
