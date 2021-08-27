import {Component, OnDestroy, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {login} from "src/app/+store/actions";
import {selectIsLoggedIn} from "src/app/+store/selectors";
import {getUserProfile} from "src/app/user/+store/actions";

@Component({
  selector: "pm-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
  credentials$: Observable<any> = this.store.select(selectIsLoggedIn);
  subscription = new Subscription();
  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit(): void {}

  login(form: NgForm): void {
    this.store.dispatch(login({credentials: {username: form.value.username, password: form.value.password}}));
    this.subscription.add(
      this.credentials$.subscribe((response) => {
        if (response) {
          this.router.navigate(["/"]);
          // if (form.value.username) {
          let username = form.value.username;
          console.log("GET USER REQUEST IS DISPATCHED");
          // }
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
