import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthActivate} from "../core/guards/auth.activate";
import {UserComponent} from "./components/user/user.component";

const routes: Routes = [
  {
    path: "user-profile",
    component: UserComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureUrl: "/login"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
