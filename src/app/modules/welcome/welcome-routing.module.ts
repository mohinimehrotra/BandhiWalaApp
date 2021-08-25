import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthOptionPage } from './page/auth-option/auth-option.page';
import { IntroPage } from './page/intro/intro.page';
import { ProfileTypePage } from './page/profile-type/profile-type.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: '',
        component: IntroPage
      },
      {
        path: 'auth-option',
        component: AuthOptionPage
      },
      {
        path: 'profile-type',
        component: ProfileTypePage
      }
    ]
  },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
