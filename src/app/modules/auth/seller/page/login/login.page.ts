
import{ Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilderService } from 'src/app/core/services/form-builder.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class SellerLoginPage implements OnInit {
  showMobileSection = true;
  showPasscodeSection = false;

  sellerLoginFormGroup: FormGroup;


  constructor(
    private router: Router,
    private formBuilderService: FormBuilderService
    ) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.sellerLoginFormGroup = this.formBuilderService.getLoginform();
  }

  verifyMobile() {
    this.showMobileSection = false;
    this.showPasscodeSection = true;
  }

  checkPassode() {
    this.router.navigate(['/auth/register/1245']);
  }

  next(el) {
    el.setFocus();
  }


}

