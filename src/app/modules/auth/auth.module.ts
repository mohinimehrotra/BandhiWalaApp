import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { SellerRegisterPage } from './seller/page/register/register.page';
import { BuyerRegisterPage } from './buyer/page/register/register.page';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginPage } from './login/login.page';


@NgModule({
  declarations: [
    SellerRegisterPage,
    BuyerRegisterPage,
    LoginPage
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    SharedModule,
    HttpClientModule
  ],
  providers: [AuthService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
