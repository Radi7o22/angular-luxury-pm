import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {User} from "src/app/user/models/user";
import {login} from "../+store/actions";
import {selectIsLoggedIn} from "../+store/selectors";

@Component({
  selector: "pm-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  credentials$: Observable<any> = this.store.select(selectIsLoggedIn); //select izvlicha state ot store

  constructor(private store: Store<any>) {}

  ngOnInit(): void {}

  login(form: NgForm): void {
    this.store.dispatch(login({credentials: {username: form.value.username, password: form.value.password}}));
  }
}
