import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class FormErrorService {

  constructor() {}

  getErrorMessage(fieldName, errorName): string {
    switch (errorName) {
      case 'pattern':
        if (fieldName == 'mobileNumber') {
          return 'Mobile number should be 10 digits';
        }
        if (fieldName === 'email') {
          return 'Invalid email id'
        }
        return 'Invalid value';
      case 'required':
        if (fieldName === 'mobileNumber') {
          return 'Mobile number is required'
        }
        return 'This field is required';
      case 'minlength':
        if (fieldName == 'password') {
          return 'Password length should be 8 digits';
        }
        return 'Minimum length not fulfilled';
      case 'email':
        return 'Invalid email id';
      case 'mustMatch':
        return 'Entered password and confirm password is different';
      default:
        return 'Unhandled error for - ' + errorName;
    }
  }
}
