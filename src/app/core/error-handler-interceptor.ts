import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Observable, Subject, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {NotificationService} from "../shared/services/notification.service";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = this.checkErrorStatus(error);
        this.notificationService.displayMessage(errorMessage);
        return throwError(error);
      })
    );
  }

  checkErrorStatus(error: HttpErrorResponse): string {
    let userErrorMessage: string;
    switch (error.status) {
      case 409: {
        userErrorMessage = error.error;
        break;
      }
      case 404: {
        userErrorMessage = "Ресурсът не е открит!";
        break;
      }
      case 403: {
        userErrorMessage = "Въведените потребителско име или парола са некоректни!";
        break;
      }
      case 401: {
        userErrorMessage = "Моля, впишете се в акаунта си!";
        this.router.navigate(["/login"]);
        break;
      }
      case 500: {
        userErrorMessage = "Възникна грешка в услугата.";
        break;
      }
      case 0: {
        userErrorMessage = "Услугата не е налична.";
        break;
      }
      default: {
        userErrorMessage = "Възникна непредвидена грешка!";
      }
    }
    return userErrorMessage;
  }
}
