import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthActivate} from "../core/guards/auth.activate";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: false,
      authenticationFailureRedirect: "/"
    }
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [AuthActivate],

    data: {
      authenticationRequired: false,
      authenticationFailureRedirect: "/"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
