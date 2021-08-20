import {Directive, Input} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn, FormGroup} from "@angular/forms";

@Directive({
  selector: "[pmFormValidator]",
  providers: [{provide: NG_VALIDATORS, useExisting: FormValidatorDirective, multi: true}]
})
export class FormValidatorDirective implements Validator {
  @Input("pmFormValidator") validator!: ValidatorFn;

  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    return this.validator(control) ? this.validator(control) : null;
  }
}
