import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class SellerLoginPage implements OnInit {
  showMobileSection = true;
  showPasscodeSection = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verifyMobile () {
    this.showMobileSection = false;
    this.showPasscodeSection = true;
  }

  checkPassode () {
    this.router.navigate(['/auth/register/1245'])
  }

  next(el) {
    el.setFocus();
  }


}
