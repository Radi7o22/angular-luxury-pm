import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "src/environments/environment";
import {Constants} from "../core/constants";
import {User} from "./models/user";

const baseURL = environment.baseURL;

@Injectable({
  providedIn: "root"
})
export class UserService {
  headerOptions: any;

  constructor(private http: HttpClient) {
    this.headerOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer${localStorage.getItem(Constants.JWT)}`
      })
    };
  }

  updateProfile(user: User) {
    return this.http.post(`${baseURL}/users/update`, user, this.headerOptions);
  }

  getProfile(username: string) {
    return this.http.get(`${baseURL}/users/${username}`, this.headerOptions);
  }
}
