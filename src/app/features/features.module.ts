import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ShoppingCartComponent} from "./shopping-cart/components/shopping-cart/shopping-cart.component";
import {ShoppingCartItemComponent} from "./shopping-cart/components/shopping-cart-item/shopping-cart-item.component";
import {ProductItemComponent} from "./products/components/product-item/product-item.component";
import {ProductsListComponent} from "./products/components/products-list/products-list.component";
import {DeliveryInfoComponent} from "./shopping-cart/components/delivery-info/delivery-info.component";
import {ProductDetailsComponent} from "./products/components/product-details/product-details.component";
import {FeaturesRoutingModule} from "./features-routing.module";

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    ProductItemComponent,
    ProductsListComponent,
    DeliveryInfoComponent,
    ProductDetailsComponent
  ],
  imports: [CommonModule, FeaturesRoutingModule],
  exports: []
})
export class FeaturesModule {}
