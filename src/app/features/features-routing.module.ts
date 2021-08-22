import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthActivate} from "../core/guards/auth.activate";
import {ProductsListComponent} from "./products/components/products-list/products-list.component";
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
