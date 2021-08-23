import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
@Injectable({
  providedIn: "root"
})
export class NotificationService {
  constructor(public snackBar: MatSnackBar) {}

  durationInSeconds = 15;

  displayMessage(message: string): void {
    this.snackBar.open(message, "Ok", {
      duration: this.durationInSeconds * 1000,
      panelClass: ["dark-snackbar"]
    });
  }

  public dismissSnackbar(): void {
    this.snackBar.dismiss();
  }
}
