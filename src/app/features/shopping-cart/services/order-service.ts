import {HttpClient} from "@angular/common/http";
import {environment} from "src/environments/environment";
import {Order} from "../models/order";

const baseURL = environment.baseURL;

export class OrderService {
  constructor(private http: HttpClient) {}

  makeOrder(order: Order) {
    return this.http.post(`${baseURL}/orders/make`, order);
  }
}
