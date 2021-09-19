/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MOBILE_REGEX } from 'src/app/core/constants/regex.constant';
import { FormService } from 'src/app/core/services/form.service';
import { UiService } from 'src/app/core/services/ui.service';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class BuyerRegisterPage implements OnInit {

  showMobileSection = true;
  showOTPSection = false;
  showRegistrationSection = false;
  mobileNumber: string;
  sessionId: string;
  otp = '';
  error: string;
  registrationForm: FormGroup;
  mobileForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private uiService: UiService
    ) { }

  ngOnInit() {
    this.buildForms();
  }

  onSendOTP() {
    this.showMobileSection = false;
    this.showOTPSection = true;
  }

  onVerifyOTP() {
    this.authService.verifyOtp(this.sessionId, this.otp)
      .subscribe((response) => {

      }, (error) => {
        console.log(error);
        this.error = error.error.message;
      }, () => {
        this.showOTPSection = false;
        this.showMobileSection = false;
        this.showRegistrationSection = true;
      });

  }

  onRegister() {

    this.authService.registerBuyer({
      mobileNumber: this.mobileNumber,
      password: this.registrationForm.get('password').value,
      fullName: this.registrationForm.get('fullName').value,
      status: 'ACTIVE',
      cityId: 2,
      address: this.registrationForm.get('address').value

    }).subscribe((response) => {

    }, (error) => {
      console.log(error);

    }, () => {
      this.showMobileSection = true;
      this.showOTPSection = false;
      this.showRegistrationSection = false;
      this.uiService.presentToast('Registration Successful');
      this.router.navigateByUrl('/auth/login');
    });
  }

  onChangeNumber() {

    this.showMobileSection = true;
    this.showOTPSection = false;
    this.showRegistrationSection = false;
  };

  onInputOtp(event){
    this.otp = event.target.value;
  }

  checkUserExist(){
    this.authService.checkUserExist(this.mobileForm.get('mobile').value)
      .subscribe((response: any) => {
        if(response.data.isUserFound === false){
          this.sessionId = response.data.sessionId;
          this.showMobileSection = false;
          this.showOTPSection = true;
          this.error = '';
          this.mobileNumber = this.mobileForm.get('mobile').value;
        }
        else if(response.data.isUserFound === true){

          this.error = 'User already exists';
        }

      }, (error) => {
        console.log(error);

      });
  };

  buildForms(){

    this.mobileForm = this.formBuilder.group({
      mobile: ['', [Validators.required, Validators.pattern(MOBILE_REGEX)]]
    });

    this.registrationForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.formService.MustMatch('password', 'confirmPassword')
    });
  }

}
