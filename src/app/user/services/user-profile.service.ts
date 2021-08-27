import {Injectable} from "@angular/core";
import {User} from "../models/user";

@Injectable({
  providedIn: "root"
})
export class UserProfileService {
  constructor() {}

  setNameAvatar(user: User) {
    let userAvatarLetters = user.firstName.charAt(0);
    return (userAvatarLetters += user.lastName.charAt(0));
  }
}
