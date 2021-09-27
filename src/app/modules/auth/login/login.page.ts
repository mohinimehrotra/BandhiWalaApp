import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilderService } from 'src/app/core/services/form-builder.service';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { FormErrorService } from 'src/app/core/services/form-error.service';
import { FormService } from 'src/app/core/services/form.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPassword = false;
  loginFormGroup: FormGroup;
  customErrorMessage = '';
  constructor(
    private router: Router,
    private formBuilderService: FormBuilderService,
    private formService: FormService,
    private formErrorService: FormErrorService,
    private authService: AuthService,



  ) { }

  ngOnInit() {
    this.buildForm();
  }
   buildForm(){
    this.loginFormGroup = this.formBuilderService.getLoginform();

   }
   onLogin() {
    this.formService.markFormAsTouched(this.loginFormGroup);
    if (this.loginFormGroup.valid) {
      this.authService.login(this.loginFormGroup.value).subscribe((data) => {
        // console.log(data);
        if (data) {
          this.loginFormGroup.reset();
        }
      }, error => {
        this.customErrorMessage = error;
      });
    }
    // console.log(this.loginFormGroup.value);
  }

  togglePasswordView() {
    this.showPassword = !this.showPassword;
  }
  public getErrorMessage(fieldName: string, error: string): string {
    return this.formErrorService.getErrorMessage(fieldName, error);
  }


}
