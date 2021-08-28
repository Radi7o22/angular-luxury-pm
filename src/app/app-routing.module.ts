import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { ProductsListComponent } from "./features/products/components/products-list/products-list.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/products"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
