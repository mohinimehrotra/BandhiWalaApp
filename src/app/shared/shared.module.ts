import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLoadingPage } from './custom-loading/custom-loading.page';
import { FieldErrorsComponent } from './field-errors/field-errors.component';




@NgModule({
  declarations: [
    CustomLoadingPage,
    FieldErrorsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomLoadingPage,
    FieldErrorsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
