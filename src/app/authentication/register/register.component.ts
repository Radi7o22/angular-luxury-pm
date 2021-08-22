import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Store} from "@ngrx/store";
import {register} from "src/app/+store/actions";
import {User} from "src/app/user/models/user";
import {emailValidator} from "../../shared/validators";
import {matchPasswordsValidator} from "../../shared/validators";
@Component({
  selector: "pm-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  emailValidator = emailValidator;
  matchPasswordsValidator = matchPasswordsValidator;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {}

  register(form: NgForm): void {
    let user = new User();
    user.username = form.value.username;
    user.password = form.value.passwords.password;
    user.email = form.value.email;
    this.store.dispatch(register({payload: user}));
  }
}
