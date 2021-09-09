import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerRegisterPage } from './buyer/page/register/register.page';
import { LoginPage } from './login/login.page';
import { SellerRegisterPage } from './seller/page/register/register.page';


const routes: Routes = [
  {
    path: 'buyer',
    children: [
      {
        path: 'register',
        // path: 'register/:mobile',
        component: BuyerRegisterPage
      }
    ]
  },
  {
    path: 'seller',
    children: [
      {
        path: 'register',
        // path: 'register/:mobile',
        component: SellerRegisterPage
      }
    ]
  },
  {
    path: 'login',
    component: LoginPage 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
