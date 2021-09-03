import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerLoginPage} from './buyer/page/login/login.page';
import { BuyerRegisterPage } from './buyer/page/register/register.page';
import { SellerLoginPage } from './seller/page/login/login.page';
import { SellerRegisterPage } from './seller/page/register/register.page';


const routes: Routes = [
  {
    path: 'buyer',
    children: [
      {
        path: 'login',
        component: BuyerLoginPage
      },
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
        path: 'login',
        component: SellerLoginPage
      },
      {
        path: 'register',
        // path: 'register/:mobile',
        component: SellerRegisterPage
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
