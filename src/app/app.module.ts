import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,CoreModule, SharedModule],
  providers: [
    SocialSharing,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
