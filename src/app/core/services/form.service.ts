import { Injectable } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  public markFormAsTouched(form: FormGroup | FormArray) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    (<any>Object).values(form.controls).forEach(control => {
      if (control.controls) {
        // control is a FormGroup or FormArray
        control.markAsTouched({ onlySelf: true });
        control.updateValueAndValidity();
        this.markFormAsTouched(control);
      } else {
        // control is a FormControl
        control.markAsTouched({ onlySelf: true });
        control.updateValueAndValidity();
      }
    });
  }

  public markFormAsDirty(form: FormGroup | FormArray) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    (<any>Object).values(form.controls).forEach(control => {
      if (control.controls) {
        // control is a FormGroup or FormArray
        control.markAsDirty();
        control.markAsTouched({ onlySelf: true });
        control.updateValueAndValidity();
        this.markFormAsDirty(control);
      } else {
        // control is a FormControl
        control.markAsDirty();
        control.markAsTouched({ onlySelf: true });
        control.updateValueAndValidity();
      }
    });
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    };
  }
}
