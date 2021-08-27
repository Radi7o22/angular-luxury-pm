import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthActivate} from "../core/guards/auth.activate";
import {ProductDetailsComponent} from "./products/components/product-details/product-details.component";
import {ProductsListComponent} from "./products/components/products-list/products-list.component";
import {DeliveryInfoComponent} from "./shopping-cart/components/delivery-info/delivery-info.component";
import {ShoppingCartComponent} from "./shopping-cart/components/shopping-cart/shopping-cart.component";

const routes: Routes = [
  {
    path: "products",
    component: ProductsListComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: false,
      authenticationFailureRedirectUrl: "/"
    }
  },
  {
    path: "shopping-cart",
    component: ShoppingCartComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: false,
      authenticationFailureRedirectUrl: "/"
    }
  },
  {
    path: "delivery-info",
    component: DeliveryInfoComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: false,
      authenticationFailureRedirectUrl: "/"
    }
  },
  {
    path: "item-preview/:id",
    component: ProductDetailsComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: false,
      authenticationFailureRedirectUrl: "/"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
