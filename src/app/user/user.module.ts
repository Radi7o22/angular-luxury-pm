import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserService} from "./user-service";
import {StoreModule} from "@ngrx/store";
import {userReducer} from "./+store/reducers";
import {EffectsModule} from "@ngrx/effects";
import {UserDetailsEffects} from "./+store/effects";

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature("user", userReducer), EffectsModule.forFeature([UserDetailsEffects])],
  exports: [UserService]
})
export class AuthenticationModule {}
