import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "src/environments/environment";
import {Category} from "../../products/models/category";

const baseURL = environment.baseURL;

@Injectable({
  providedIn: "root"
})
export class DeliveryService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Category[]>(`${baseURL}/delivery-services/all`);
  }
}
