import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerHomePage } from './home/page/seller-home/seller-home.page';
import { AddProductPage } from './products/page/add-product/add-product.page';
import { AutoEntryPage } from './products/page/auto-entry/auto-entry.page';
import { BuyersListPage } from './buyers/page/buyers-list/buyers-list.page';
import { AddBuyerPage } from './buyers/page/add-buyer/add-buyer.page';
import { SalesListingPage } from './sales/page/sales-listing/sales-listing.page';
import { AddSalesEntryPage } from './sales/page/add-sales-entry/add-sales-entry.page';
import { GenerateBillPage } from './bills/page/generate-bill/generate-bill.page';
import { BulkSalesEntryPage } from './sales/page/bulk-sales-entry/bulk-sales-entry.page';
import { BillDetailPage } from './bills/page/bill-detail/bill-detail.page';
import { PaymentHistoryPage } from './payments/page/payment-history/payment-history.page';
import { ProductListPage } from './products/page/product-list/product-list.page';
import { HelpPage } from './help/help.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { TokenInterceptorService } from 'src/app/core/interceptors/token.interceptor';
import { SellerDashboardService } from './services/seller-dashboard.service';
import { SellerDashboardRoutingModule } from './seller-dashboard-routing.module';
import { AdvanceBookingsPage } from './bookings/page/advance-bookings/advance-bookings.page';
import { RequestListPage } from './requests/page/request-list/request-list.page';
import { MyProfilePage } from './profile/my-profile/my-profile.page';
import { EditProfilePage } from './profile/edit-profile/edit-profile.page';
import { EmptyPage } from 'src/app/shared/empty/empty.page';
import { BuyerDetailPage } from './buyers/page/buyer-detail/buyer-detail.page';


@NgModule({
  declarations: [
    SellerHomePage,
    AddProductPage,
    AutoEntryPage,
    BuyersListPage,
    AddBuyerPage,
    SalesListingPage,
    AddSalesEntryPage,
    BulkSalesEntryPage,
    GenerateBillPage,
    BillDetailPage,
    PaymentHistoryPage,
    ProductListPage,
    HelpPage,
    AdvanceBookingsPage,
    RequestListPage,
    MyProfilePage,
    EditProfilePage,
    EmptyPage,
    BuyerDetailPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    SellerDashboardRoutingModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],
  providers: [
    SellerDashboardService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SellerDashboardModule { }
