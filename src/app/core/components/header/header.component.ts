import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Constants} from "../../constants";

@Component({
  selector: "pm-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem(Constants.JWT);
    localStorage.removeItem(Constants.LOGGED_USERNAME);
  }
}
