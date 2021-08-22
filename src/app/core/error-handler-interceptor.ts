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
      retry(2),
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
      case 404: {
        userErrorMessage = "Resource is not found";
        break;
      }
      case 403: {
        userErrorMessage = "Please login to your account";
        break;
      }
      case 401: {
        userErrorMessage = "Please login to your account";
        this.router.navigate(["/login"]);
        break;
      }
      case 500: {
        userErrorMessage = "Internal server error";
        break;
      }
      case 0: {
        userErrorMessage = "Service is unavailable";
        break;
      }
      default: {
        userErrorMessage = "Unknown server error";
      }
    }
    return userErrorMessage;
  }
}
