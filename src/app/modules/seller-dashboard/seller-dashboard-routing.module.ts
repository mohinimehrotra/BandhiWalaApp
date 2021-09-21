import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillDetailPage } from './bills/page/bill-detail/bill-detail.page';
import { GenerateBillPage } from './bills/page/generate-bill/generate-bill.page';
import { AddBuyerPage } from './buyers/page/add-buyer/add-buyer.page';
import { BuyersListPage } from './buyers/page/buyers-list/buyers-list.page';
import { SellerHomePage } from './home/page/seller-home/seller-home.page';
import { PaymentHistoryPage } from './payments/page/payment-history/payment-history.page';
import { AddProductPage } from './products/page/add-product/add-product.page';
import { AutoEntryPage } from './products/page/auto-entry/auto-entry.page';
import { ProductListPage } from './products/page/product-list/product-list.page';
import { AddSalesEntryPage } from './sales/page/add-sales-entry/add-sales-entry.page';
import { BulkSalesEntryPage } from './sales/page/bulk-sales-entry/bulk-sales-entry.page';
import { SalesListingPage } from './sales/page/sales-listing/sales-listing.page';
import { HelpPage } from './help/help.page';
import { AdvanceBookingsPage } from './bookings/page/advance-bookings/advance-bookings.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: SellerHomePage
      },
      {
        path: 'help',
        component: HelpPage
      },
      {
        path: 'add-product',
        component: AddProductPage
      },
      {
        path: 'auto-entry',
        component: AutoEntryPage
      },
      {
        path: 'buyers-list',
        component: BuyersListPage
      },
      {
        path: 'add-buyer',
        component: AddBuyerPage
      },
      {
        path: 'sales-listing',
        component: SalesListingPage
      },
      {
        path: 'add-sales-entry',
        component: AddSalesEntryPage
      },
      {
        path: 'bulk-sales-entry',
        component: BulkSalesEntryPage
      },
      {
        path: 'generate-bill',
        component: GenerateBillPage
      },
      {
        path: 'bill-detail',
        component: BillDetailPage
      },
      {
        path: 'product-list',
        component: ProductListPage
      },
      {
        path: 'payment-history',
        component: PaymentHistoryPage
      },
      {
        path: 'advance-bookings',
        component: AdvanceBookingsPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerDashboardRoutingModule { }
