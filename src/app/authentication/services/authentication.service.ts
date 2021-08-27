import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "src/environments/environment";
import {User} from "../../user/models/user";

const baseURL = environment.baseURL;

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    let credentials = {
      username: username,
      password: password
    };
    return this.http.post<HttpResponse<Object>>(`${baseURL}/login`, credentials, {observe: "response"});
  }

  register(user: User) {
    return this.http.post(`${baseURL}/users/sign-up`, user);
  }
}
