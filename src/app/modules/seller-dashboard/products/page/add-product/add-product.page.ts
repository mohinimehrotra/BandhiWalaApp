import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilderService } from 'src/app/core/services/form-builder.service';
import { FormErrorService } from 'src/app/core/services/form-error.service';
import { FormService } from 'src/app/core/services/form.service';
import { SellerDashboardService } from '../../../services/seller-dashboard.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  addProductFormGroup: FormGroup;
  customErrorMessage ='';

  constructor(
    private formBuilderService: FormBuilderService,
    private formService: FormService,
    private formErrorService: FormErrorService,
    private sellerDashboardService: SellerDashboardService
  ) { }

  ngOnInit() {
    this.buildForms();
  }
  
  buildForms() {
    this.addProductFormGroup = this.formBuilderService.getProductAddForm();
    this.addProductFormGroup.valueChanges.subscribe(() => {
      this.customErrorMessage = '';
    })
  }

  onAddProduct() {
    this.formService.markFormAsTouched(this.addProductFormGroup);
    if (!this.addProductFormGroup.valid) {
      return;
    }

    this.sellerDashboardService.addProduct(this.addProductFormGroup.value).subscribe((response) => {
      if (response) {
        this.addProductFormGroup.reset();
      }
    }, error => {
      this.customErrorMessage = error;
    });
  }

  public getErrorMessage(fieldName: string, error: string): string {
    return this.formErrorService.getErrorMessage(fieldName, error);
  }

}
