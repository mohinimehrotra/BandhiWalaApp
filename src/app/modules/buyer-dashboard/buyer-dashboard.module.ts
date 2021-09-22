import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerDashboardRoutingModule } from './buyer-dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { BuyerHomePage } from './home/page/buyer-home/buyer-home.page';
import { AdvanceBookingsPage } from './bookings/page/advance-bookings/advance-bookings.page';
import { AddBookingsPage } from './bookings/page/add-bookings/add-bookings.page';
import { BillManagementPage } from './bills/page/bill-management/bill-management.page';
import { BillDetailPage } from '../seller-dashboard/bills/page/bill-detail/bill-detail.page';
import { MainProfilePage } from './profile/main-profile/main-profile.page';
import { EditProfilePage } from './profile/edit-profile/edit-profile.page';
import { OrderEntriesPage } from './orders/page/order-entries/order-entries.page';
import { BuyerService } from './buyer-dashboard.service';
import { TokenInterceptorService } from 'src/app/core/interceptors/token.interceptor';

@NgModule({
  declarations: [
    BuyerHomePage,
    AdvanceBookingsPage,
    AddBookingsPage,
    BillManagementPage,
    BillDetailPage,
    MainProfilePage,
    EditProfilePage,
    OrderEntriesPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    BuyerDashboardRoutingModule
  ],
  providers: [
    BuyerService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BuyerDashboardModule { }
