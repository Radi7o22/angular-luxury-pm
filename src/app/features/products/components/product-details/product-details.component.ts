import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {NotificationService} from "src/app/shared/services/notification.service";
import {getProductDetails} from "../../+store/actions";
import {selectProductDetails} from "../../+store/selectors";
import {ItemDetails} from "../../models/item-details";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: "pm-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private notificationService: NotificationService,
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private store: Store<any>
  ) {}
  subscription = new Subscription();
  itemDetails$: Observable<any> = this.store.select(selectProductDetails);
  image!: string;

  itemDetails!: ItemDetails;

  ngOnInit(): void {
    this.route.snapshot.paramMap.get("id");
    let id = parseInt(this.route.snapshot.queryParamMap.get("id")!);
    this.getProductDetails(id);
  }

  getProductDetails(id: number): void {
    this.store.dispatch(getProductDetails({payload: {id}}));
    this.subscription.add(
      this.itemDetails$.subscribe((response) => {
        this.itemDetails = response;
        this.getProductDetailsImage();
      })
    );
  }

  getProductDetailsImage(): string | null {
    if (this.itemDetails != null) {
      return this.productsService.getProductDetailsImage(this.itemDetails);
    }
    return null;
  }

  addToCart() {
    let image = this.productsService.getProductImageForCart(this.itemDetails);
    let item = this.productsService.transformItemDetails(this.itemDetails, image);
    this.productsService.addToCart(item);
    this.notificationService.displayMessage(`Продуктът " ${this.itemDetails.name} " е добавен към количката!`);
  }
}
