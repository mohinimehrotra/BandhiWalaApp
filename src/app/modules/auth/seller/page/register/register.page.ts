import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilderService } from 'src/app/core/services/form-builder.service';
import { FormErrorService } from 'src/app/core/services/form-error.service';
import { FormService } from 'src/app/core/services/form.service';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class SellerRegisterPage implements OnInit {

  showMobileSection = true;
  showOTPSection = false;
  showRegistrationSection = false;
  sellerRegistartionFormGroup: FormGroup;
  otpVerifyFormGroup: FormGroup;
  customErrorMessage = '';

  constructor(
    private router: Router,
    private formBuilderService: FormBuilderService,
    private formService: FormService,
    private formErrorService: FormErrorService,
    private authService: AuthService,

    ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.sellerRegistartionFormGroup = this.formBuilderService.getSellerRegistartionform();
    this.otpVerifyFormGroup = this.formBuilderService.getOtpForm();
    console.log(this.otpVerifyFormGroup)
  }

  onSendOTP () {
    this.formService.markFormAsTouched(this.otpVerifyFormGroup)
    if (!this.otpVerifyFormGroup.valid) {
      return;
    }
    this.sellerRegistartionFormGroup.value.mobileNumber = '9039335274';
    console.log(this.sellerRegistartionFormGroup.value)
    this.showMobileSection = false;
    this.showOTPSection = true;
  }

  onVerifyOTP () {
    this.showOTPSection = false;
    this.showMobileSection = false;
    this.showRegistrationSection = true;
  }

  onRegister () {
    this.formService.markFormAsTouched(this.sellerRegistartionFormGroup);
    
    if (this.sellerRegistartionFormGroup.valid) {
      this.authService.registerSeller(this.sellerRegistartionFormGroup.value).subscribe((data) => {
        console.log(data);
        if (data) {
          this.sellerRegistartionFormGroup.reset();
        }
      }, error => {
        this.customErrorMessage = error;
      })
    }
    console.log(this.sellerRegistartionFormGroup.value);
    // this.showMobileSection = true;
    // this.showOTPSection = false;
    // this.showRegistrationSection = false;
    // this.router.navigateByUrl('/auth/login');
  }

  onChangeNumber() {
    this.showMobileSection = true;
    this.showOTPSection = false;
    this.showRegistrationSection = false;
  }

  public getErrorMessage(fieldName: string, error: string): string {
    return this.formErrorService.getErrorMessage(fieldName, error);
  }

}
