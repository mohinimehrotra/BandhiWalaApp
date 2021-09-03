import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class BuyerRegisterPage implements OnInit {

  showMobileSection = true;
  showOTPSection = false;
  showRegistrationSection = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSendOTP () {
    this.showMobileSection = false;
    this.showOTPSection = true;
  }

  onVerifyOTP () {
    this.showOTPSection = false;
    this.showMobileSection = false;
    this.showRegistrationSection = true;
  }

  onRegister () {
    this.showMobileSection = true;
    this.showOTPSection = false;
    this.showRegistrationSection = false;
    this.router.navigateByUrl('/auth/login');
  }

  onChangeNumber() {
    this.showMobileSection = true;
    this.showOTPSection = false;
    this.showRegistrationSection = false;
  }

}
