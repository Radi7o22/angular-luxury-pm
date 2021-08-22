import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatMenuModule, MatInputModule, MatIconModule, MatSnackBarModule, MatFormFieldModule],
  exports: [MatButtonModule, MatMenuModule, MatInputModule, MatIconModule, MatSnackBarModule, MatFormFieldModule]
})
export class MaterialModule {}
