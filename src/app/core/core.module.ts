import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./components/header/header.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {FooterComponent} from "./components/footer/footer.component";
import {AuthActivate} from "./guards/auth.activate";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [HeaderComponent, NavigationComponent, FooterComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [HeaderComponent, NavigationComponent, FooterComponent],
  providers: [AuthActivate]
})
export class CoreModule {}
