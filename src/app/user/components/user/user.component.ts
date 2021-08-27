import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";

@Component({
  selector: "pm-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  componentName = "userComponent";
  constructor(private store: Store<any>) {}

  ngOnInit(): void {}
}
