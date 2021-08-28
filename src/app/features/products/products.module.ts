import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProductItemComponent} from "./components/product-item/product-item.component";
import {ProductsListComponent} from "./components/products-list/products-list.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {productsReducers} from "./+store";
import {ProductsEffects} from "./+store/effects";
import {CoreModule} from "src/app/core/core.module";
import {ProductsRoutingModule} from "./products-routing.module";

@NgModule({
  declarations: [ProductItemComponent, ProductsListComponent, ProductDetailsComponent],
  imports: [CommonModule, StoreModule.forFeature("products", productsReducers), EffectsModule.forFeature([ProductsEffects]), CoreModule, ProductsRoutingModule]
})

export class ProductsModule {}
