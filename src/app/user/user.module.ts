import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {UserDetailsEffects} from "./+store/effects";
import {reducers} from "./+store";
import {UserComponent} from "./components/user/user.component";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {UserRoutingModule} from "./user-routing.module";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [UserComponent],
  imports: [UserRoutingModule, CommonModule, StoreModule.forFeature("user", reducers), EffectsModule.forFeature([UserDetailsEffects])],
  exports: [],
  providers: []
})
export class UserModule {}
