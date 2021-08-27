import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ShoppingCartComponent} from "./components/shopping-cart/shopping-cart.component";
import {ShoppingCartItemComponent} from "./components/shopping-cart-item/shopping-cart-item.component";
import {DeliveryInfoComponent} from "./components/delivery-info/delivery-info.component";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {ShoppingCartEffects} from "./+store/effects";
import {shoppingCartReducers} from "./+store";
import {CoreModule} from "src/app/core/core.module";
import {ShoppingCartRoutingModule} from "./shopping-cart-routing.module";
import {UserModule} from "../../user/user.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [ShoppingCartComponent, ShoppingCartItemComponent, DeliveryInfoComponent],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    StoreModule.forFeature("shoppingCart", shoppingCartReducers),
    EffectsModule.forFeature([ShoppingCartEffects]),
    UserModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class ShoppingCartModule {}
