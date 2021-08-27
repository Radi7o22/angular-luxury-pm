import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {UserDetailsEffects} from "./+store/effects";
import {reducers} from "./+store";
import {UserComponent} from "./components/user/user.component";
import {UserRoutingModule} from "./user-routing.module";
import {NgModule} from "@angular/core";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [UserComponent, UserProfileComponent],
  imports: [
    UserRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature("user", reducers),
    EffectsModule.forFeature([UserDetailsEffects])
  ],
  exports: [UserProfileComponent],
  providers: []
})
export class UserModule {}
