import {HttpClient} from "@angular/common/http";
import {environment} from "src/environments/environment";
import {Category} from "../models/category";

const baseURL = environment.baseURL;

export class CategoryService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Category[]>(`${baseURL}/categories/all`);
  }
}
