import {HttpClient} from "@angular/common/http";
import {environment} from "src/environments/environment";
import {Item} from "../models/item";

const baseURL = environment.baseURL;

export class ItemService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Item[]>(`${baseURL}/items/all`);
  }

  getItemsInCategoryAndSubcategory(categoryId: number, subcategoryId: number) {
    return this.http.get<Item[]>(`${baseURL}/items/category/${categoryId}/subcategory/${subcategoryId}`);
  }

  getItemDetails(itemId: number) {
    return this.http.get<Item>(`${baseURL}/items/${itemId}`);
  }
}
