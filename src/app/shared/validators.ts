import {AbstractControl, FormControl, FormGroup, NgForm, NgModelGroup, ValidationErrors} from "@angular/forms";
import {Subscription} from "rxjs";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  let emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if ((control.errors && control.errors.invalidEmail === false) || control.value == "") {
    return null;
  }
  return emailRegExp.test(control.value) ? null : {invalidEmail: true};
}

export function matchPasswordsValidator(group: AbstractControl): ValidationErrors | null {
  let formgroup = group as FormGroup;
  let password = formgroup.controls["password"];
  let repeatPassword = formgroup.controls["repeatPassword"];
  let subscription: Subscription | null = null;
  if (password && repeatPassword) {
    subscription = password.valueChanges.subscribe({
      next: () => {
        repeatPassword.updateValueAndValidity();
      },
      complete: () => {
        subscription = null;
      }
    });
  }

  if (!password || !repeatPassword) {
    return null;
  } else if (repeatPassword.errors && !repeatPassword.errors.invalidPasswords) {
    return null;
  } else {
    if (password.value === repeatPassword.value) {
      return null;
    } else {
      repeatPassword.setErrors({invalidPasswords: true});
    }
    return password.value === repeatPassword.value ? null : {invalidPasswords: true};
  }
}
