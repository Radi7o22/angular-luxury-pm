import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductsListComponent} from "./products/components/products-list/products-list.component";
import {ShoppingCartComponent} from "./shopping-cart/components/shopping-cart/shopping-cart.component";

const routes: Routes = [
  {
    path: "products",
    component: ProductsListComponent
  },
  {
    path: "shopping-cart",
    component: ShoppingCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
