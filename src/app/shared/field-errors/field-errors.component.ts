import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.scss']
})
export class FieldErrorsComponent implements OnInit {
  @Input() public targetControl: AbstractControl;

  @Input() public formGroup: FormGroup;
  @Input() public formArray: FormArray;

  @Input() public fieldIndex: number;
  @Input() public fieldName: string;

  @Input() public getErrorMessage: (fieldName: string, error: string) => string;

  @Input()
  public params: { [key: string]: string };

  public errors$: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    if (this.formGroup) {
      if (this.targetControl) {
        this.fieldName = this.getControlName(this.targetControl);
      } else {
        this.targetControl = this.formGroup.controls[this.fieldName];
      }
    }
    else if (this.formArray) {
      if (this.targetControl) {
        this.fieldIndex = this.getControlIndex(this.targetControl);
        this.fieldName = this.getFormArrayName(this.targetControl);
      } else {
        this.targetControl = this.formArray.controls[this.fieldIndex];
        this.fieldName = this.getFormArrayName(this.targetControl);
      }
    }

    this.errors$ = this.targetControl.statusChanges.pipe(
      map(() => this.toFieldErrors()),
      map((errors) => this.errorsToMessage(errors))
    );
  }

  private getControlName(control: AbstractControl) {
    let controlName: string;

    Object.keys(control.parent.controls).forEach((name) => {
      if (control === (control.parent as FormGroup).controls[name]) {
        controlName = name;
      }
    });

    return controlName;
  }

  private getFormArrayName(control: AbstractControl) {
    let controlName: string;
    control = control.parent;
    Object.keys(control.parent.controls).forEach((name) => {
      if (control === (control.parent as FormGroup).controls[name]) {
        controlName = name;
      }
    });

    return controlName;
  }

  private getControlIndex(control: AbstractControl) {
    return (control.parent.controls as AbstractControl[]).findIndex(item => item === control);
  }

  private toFieldErrors() {
    if (this.isErrorDisplayed(this.targetControl)) {
      if (this.targetControl.errors) {
        return Object.keys(this.targetControl.errors);
      }
    }
    return [];
  }

  private isErrorDisplayed(formControl: AbstractControl) {
    return formControl.touched && formControl.invalid;
  }

  private errorsToMessage(errors: string[]) {
    return errors.map((error) => this.getErrorMessage(this.fieldName, error));
  }
}
