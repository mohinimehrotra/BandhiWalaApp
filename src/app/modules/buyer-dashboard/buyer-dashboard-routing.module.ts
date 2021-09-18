import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerHomePage } from './home/page/buyer-home/buyer-home.page';

const routes: Routes = [
  {
    path: '',
      children: [
        {
          path: 'home',
          component: BuyerHomePage
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerDashboardRoutingModule { }
