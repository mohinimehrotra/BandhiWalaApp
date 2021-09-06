import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerDashboardRoutingModule } from './seller-dashboard-routing.module';
import { SellerHomePage } from './home/page/seller-home/seller-home.page';
import { AddProductPage } from './products/page/add-product/add-product.page';
import { AutoEntryPage } from './products/page/auto-entry/auto-entry.page';
import { BuyersListPage } from './buyers/page/buyers-list/buyers-list.page';
import { AddBuyerPage } from './buyers/page/add-buyer/add-buyer.page';
import { RequestBookingsPage } from './bookings/page/request-bookings/request-bookings.page';
import { PastBookingsPage } from './bookings/page/past-bookings/past-bookings.page';
import { SalesListingPage } from './sales/page/sales-listing/sales-listing.page';
import { AddSalesEntryPage } from './sales/page/add-sales-entry/add-sales-entry.page';
import { GenerateBillPage } from './bills/page/generate-bill/generate-bill.page';
import { BulkSalesEntryPage } from './sales/page/bulk-sales-entry/bulk-sales-entry.page';
import { BillDetailPage } from './bills/page/bill-detail/bill-detail.page';
import { PastBillsPage } from './bills/page/past-bills/past-bills.page';
import { PaymentHistoryPage } from './payments/page/payment-history/payment-history.page';
import { ProductListPage } from './products/page/product-list/product-list.page';


@NgModule({
  declarations: [
    SellerHomePage,
    AddProductPage,
    AutoEntryPage,
    BuyersListPage,
    AddBuyerPage,
    RequestBookingsPage,
    PastBookingsPage,
    SalesListingPage,
    AddSalesEntryPage,
    BulkSalesEntryPage,
    GenerateBillPage,
    BillDetailPage,
    PastBillsPage,
    PaymentHistoryPage,
    ProductListPage
  ],
  imports: [
    CommonModule,
    SellerDashboardRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SellerDashboardModule { }
