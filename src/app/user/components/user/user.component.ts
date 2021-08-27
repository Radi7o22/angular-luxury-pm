import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectUserData} from "../../+store/selectors";
import {User} from "../../models/user";
import {UserProfileService} from "../../services/user-profile.service";

@Component({
  selector: "pm-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  componentName = "userComponent";
  userData$: Observable<any> = this.store.select(selectUserData);
  userAvatarLetters!: string;
  username!: string;

  constructor(private userService: UserProfileService, private store: Store<any>) {}

  ngOnInit(): void {
    this.userData$.subscribe((response) => {
      if (response !== null) {
        this.setNameAvatar(response);
      }
    });
  }

  setNameAvatar(user: User) {
    if (user.firstName != null) {
      this.username = user.firstName;
      this.userAvatarLetters = this.userService.setNameAvatar(user);
    } else {
      this.username = "Потребител";
      this.userAvatarLetters = "П";
    }
  }

  updateName(user: User) {
    this.setNameAvatar(user);
  }
}
