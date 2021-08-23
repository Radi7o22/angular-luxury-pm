import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "src/environments/environment";
import {Item} from "../models/item";

const baseURL = environment.baseURL;

@Injectable({
  providedIn: "root"
})
export class ItemService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Item[]>(`${baseURL}/items/all`);
  }

  getItemsInCategoryAndSubcategory(categoryId: number, subcategoryId: number) {
    return this.http.get<Item[]>(`${baseURL}/items/category/${categoryId}/subcategory/${subcategoryId}`);
  }

  findByCategory(categoryId: number) {
    return this.http.get<Item[]>(`${baseURL}/items/category/${categoryId}`);
  }

  getItemDetails(itemId: number) {
    return this.http.get<Item>(`${baseURL}/items/${itemId}`);
  }
}
