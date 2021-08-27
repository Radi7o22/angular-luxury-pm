import {Component, OnInit} from "@angular/core";

@Component({
  selector: "pm-delivery-info",
  templateUrl: "./delivery-info.component.html",
  styleUrls: ["./delivery-info.component.scss"]
})
export class DeliveryInfoComponent implements OnInit {
  constructor() {}
  componentName = "deliveryInfoComponent";

  ngOnInit(): void {}

  makeOrder() {}
}
