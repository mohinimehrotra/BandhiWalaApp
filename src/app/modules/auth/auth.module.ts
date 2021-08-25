import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { SellerRegisterPage } from './seller/page/register/register.page';
import { SellerLoginPage } from './seller/page/login/login.page';
import { BuyerRegisterPage } from './buyer/page/register/register.page';
import { BuyerLoginPage } from './buyer/page/login/login.page';


@NgModule({
  declarations: [
    SellerRegisterPage,
    SellerLoginPage,
    BuyerRegisterPage,
    BuyerLoginPage
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
