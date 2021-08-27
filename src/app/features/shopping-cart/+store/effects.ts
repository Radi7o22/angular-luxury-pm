import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, switchMap} from "rxjs/operators";
import {NotificationService} from "src/app/shared/services/notification.service";
import {OrderService} from "../services/order-service";
import {makeOrderFail, makeOrderSuccess, ShoppingCartActionTypes} from "./actions";

@Injectable()
export class ShoppingCartEffects {
  constructor(private actions$: Actions, private orderService: OrderService, private notificationService: NotificationService) {}

  makeOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingCartActionTypes.MAKE_ORDER),
      switchMap((action: any) =>
        this.orderService.makeOrder(action.payload.order).pipe(
          map(() => {
            this.notificationService.displayMessage("Поръчката е направена успешно!");
            return makeOrderSuccess();
          }),
          catchError((error) => {
            return [makeOrderFail({payload: {error}})];
          })
        )
      )
    )
  );
}
