import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthActivate} from "src/app/core/guards/auth.activate";
import {DeliveryInfoComponent} from "./components/delivery-info/delivery-info.component";
import {ShoppingCartComponent} from "./components/shopping-cart/shopping-cart.component";

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule {}
