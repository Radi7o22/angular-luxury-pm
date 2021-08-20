import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatInputModule, MatIconModule, MatSnackBarModule, MatFormFieldModule],
  exports: [MatButtonModule, MatInputModule, MatIconModule, MatSnackBarModule, MatFormFieldModule]
})
export class MaterialModule {}
