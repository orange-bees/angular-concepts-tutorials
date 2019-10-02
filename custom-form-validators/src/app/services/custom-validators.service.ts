import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  constructor() {}

  startBeforeEnd(startKey: string, endKey: string, errorKey: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (!control) { return null; }

      const start = control.get(startKey);
      const end = control.get(endKey);
      if (!start.value || !end.value) {
        return null;
      }

      const startDate = new Date(start.value);
      const endDate = new Date(end.value);

      const obj = Object.assign({}, control.errors);
      if (!this.isValidDate(startDate) || !this.isValidDate(endDate)) {
        delete obj[errorKey];
        return null;
      } else if (startDate > endDate) {
        obj[errorKey] = true;
        return obj;
      }
      delete obj[errorKey];
      return null;
    };
  }

  passwordsMatch(passwordKey: string, confirmPasswordKey: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (!control) { return null; }

      const password = control.get(passwordKey);
      const confirmPassword = control.get(confirmPasswordKey);
      if (!password.value || !confirmPassword.value) {
        return null;
      }

      const obj = Object.assign({}, control.errors);
      if (password.value !== confirmPassword.value) {
        obj['passwordMismatch'] = true;
        return obj;
      }
      delete obj['passwordMismatch'];
      return null;
    };
  }

  private isValidDate(date: any): boolean {
    return date instanceof Date && !isNaN(Number(date));
  }
}
