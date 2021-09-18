import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerDashboardRoutingModule } from './buyer-dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { BuyerHomePage } from './home/page/buyer-home/buyer-home.page';


@NgModule({
  declarations: [
    BuyerHomePage
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    BuyerDashboardRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BuyerDashboardModule { }
