import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./modules/welcome/welcome.module').then( m => m.WelcomeModule)
  },
  {
    path: 'seller',
    loadChildren: () => import('./modules/seller-dashboard/seller-dashboard.module').then( m => m.SellerDashboardModule)
  },
  {
    path: 'buyer',
    loadChildren: () => import('./modules/buyer-dashboard/buyer-dashboard.module').then( m => m.BuyerDashboardModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
