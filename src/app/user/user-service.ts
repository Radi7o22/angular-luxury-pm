import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "src/environments/environment";
import {User} from "./models/user";

const baseURL = environment.baseURL;

@Injectable({
  providedIn: "root"
})
export class UserService {
  headerOptions: object;

  constructor(private http: HttpClient) {
    this.headerOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer + token goes here"
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
