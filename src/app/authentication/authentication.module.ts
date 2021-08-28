import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {FormsModule} from "@angular/forms";
import {AuthenticationRoutingModule} from "./authentication-routing.module";
import {SharedModule} from "../shared/shared.module";
import { AuthenticationService } from "./services/authentication.service";

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, FormsModule, AuthenticationRoutingModule, SharedModule],
  exports: [LoginComponent, RegisterComponent]
})
export class AuthenticationModule {}
