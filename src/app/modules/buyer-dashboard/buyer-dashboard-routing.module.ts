import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookingsPage } from './bookings/page/add-bookings/add-bookings.page';
import { AdvanceBookingsPage } from './bookings/page/advance-bookings/advance-bookings.page';
import { BuyerHomePage } from './home/page/buyer-home/buyer-home.page';

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
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerDashboardRoutingModule { }
