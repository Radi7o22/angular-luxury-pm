import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Route} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {getProductDetails} from "../../+store/actions";
import {selectProductDetails} from "../../+store/selectors";
import {ItemDetails} from "../../models/item-details";

@Component({
  selector: "pm-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store<any>) {}
  subscription = new Subscription();
  itemDetails$: Observable<any> = this.store.select(selectProductDetails);
  mainImg!: string;

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
        this.getProductMainImage();
      })
    );
  }

  getProductMainImage(): string | null {
    if (this.itemDetails != null) {
      let image = this.itemDetails.images.find((img) => img.main === false);
      return `url(${image!.path})`;
    }
    return null;
  }
}
