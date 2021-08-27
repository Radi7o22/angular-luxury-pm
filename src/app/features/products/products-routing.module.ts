import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthActivate} from "src/app/core/guards/auth.activate";
import {ShoppingCartComponent} from "../shopping-cart/components/shopping-cart/shopping-cart.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {ProductsListComponent} from "./components/products-list/products-list.component";

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
export class ProductsRoutingModule {}
