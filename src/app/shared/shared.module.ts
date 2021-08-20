import {MaterialModule} from "./material.module";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormValidatorDirective} from "./directives/form-validator.directive";

@NgModule({
  declarations: [FormValidatorDirective],
  imports: [MaterialModule, CommonModule],
  exports: [MaterialModule, CommonModule, FormValidatorDirective]
})
export class SharedModule {}
