import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { IntroPage } from './page/intro/intro.page';
import { AuthOptionPage } from './page/auth-option/auth-option.page';
import { ProfileTypePage } from './page/profile-type/profile-type.page';


@NgModule({
  declarations: [
    IntroPage,
    AuthOptionPage,
    ProfileTypePage
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomeModule { }
