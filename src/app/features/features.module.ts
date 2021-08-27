import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ShoppingCartComponent} from "./shopping-cart/components/shopping-cart/shopping-cart.component";
import {ShoppingCartItemComponent} from "./shopping-cart/components/shopping-cart-item/shopping-cart-item.component";
import {ProductItemComponent} from "./products/components/product-item/product-item.component";
import {ProductsListComponent} from "./products/components/products-list/products-list.component";
import {DeliveryInfoComponent} from "./shopping-cart/components/delivery-info/delivery-info.component";
import {ProductDetailsComponent} from "./products/components/product-details/product-details.component";
import {FeaturesRoutingModule} from "./features-routing.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {ProductsEffects} from "./products/+store/effects";
import {productsReducers} from "./products/+store";
import {CoreModule} from "../core/core.module";
import {UserModule} from "../user/user.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ShoppingCartEffects} from "./shopping-cart/+store/effects";
import {shoppingCartReducers} from "./shopping-cart/+store";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    StoreModule.forFeature("products", productsReducers),
    EffectsModule.forFeature([ProductsEffects]),
    StoreModule.forFeature("shoppingCart", shoppingCartReducers),
    EffectsModule.forFeature([ShoppingCartEffects]),
    CoreModule,
    UserModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class FeaturesModule {}
