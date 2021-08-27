import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {AuthenticationModule} from "./authentication/authentication.module";
import {CoreModule} from "./core/core.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FeaturesModule} from "./features/features.module";
import {SharedModule} from "./shared/shared.module";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./+store";
import {AuthEffects} from "./+store/effects";
import {EffectsModule} from "@ngrx/effects";
import {ErrorHandlerInterceptor} from "./core/error-handler-interceptor";
import {UserModule} from "./user/user.module";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {ShoppingCartModule} from "./features/shopping-cart/shopping-cart.module";
import {ProductsModule} from "./features/products/products.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    ShoppingCartModule,
    ProductsModule,
    UserModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({}),
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
