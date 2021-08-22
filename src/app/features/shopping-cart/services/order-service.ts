import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "src/environments/environment";
import {Order} from "../models/order";

const baseURL = environment.baseURL;

@Injectable({
  providedIn: "root"
})
export class OrderService {
  constructor(private http: HttpClient) {}

  makeOrder(order: Order) {
    return this.http.post(`${baseURL}/orders/make`, order);
  }
}
