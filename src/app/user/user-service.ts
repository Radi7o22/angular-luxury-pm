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
  constructor(private http: HttpClient) {
    console.log("headers in constructor are loaded");
  }

  updateProfile(user: User) {
    return this.http.post(`${baseURL}/users/update`, user, this.getHeaders());
  }

  getProfile(username: string) {
    return this.http.get(`${baseURL}/users/${username}`, this.getHeaders());
  }

  getHeaders() {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: JSON.parse(localStorage.getItem(Constants.JWT)!)
      })
    };
  }
}
