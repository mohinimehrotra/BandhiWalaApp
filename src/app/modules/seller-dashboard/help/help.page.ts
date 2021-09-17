import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilderService } from 'src/app/core/services/form-builder.service';
import { FormErrorService } from 'src/app/core/services/form-error.service';
import { FormService } from 'src/app/core/services/form.service';
import { SellerDashboardService } from '../services/seller-dashboard.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  helpPageFormGroup: FormGroup;
  customErrorMessage ='';

  constructor(
    private formBuilderService: FormBuilderService,
    private formService: FormService,
    private formErrorService: FormErrorService,
    private sellerDashboardService: SellerDashboardService,
  ) { }

  ngOnInit() {
    this.buildForms();
  }

  buildForms() {
    this.helpPageFormGroup = this.formBuilderService.getHelpFrom();
    this.helpPageFormGroup.valueChanges.subscribe(() => {
      this.customErrorMessage = '';
    })
  }

  onHelp() {
    this.formService.markFormAsTouched(this.helpPageFormGroup);
    if (!this.helpPageFormGroup.valid) {
      return;
    }

    this.sellerDashboardService.createFeedback(this.helpPageFormGroup.value).subscribe((response) => {
      if (response) {
        this.helpPageFormGroup.reset();
      }
    }, error => {
      this.customErrorMessage = error;
    });
  }

  public getErrorMessage(fieldName: string, error: string): string {
    return this.formErrorService.getErrorMessage(fieldName, error);
  }
}
