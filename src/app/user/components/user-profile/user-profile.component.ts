import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {Constants} from "src/app/core/constants";
import {makeOrder} from "src/app/features/products/+store/actions";
import {selectShoppingCartList} from "src/app/features/products/+store/selectors";
import {Order} from "src/app/features/shopping-cart/models/order";
import {getUserProfile, updateUserProfile} from "../../+store/actions";
import {selectUserData} from "../../+store/selectors";
import {User} from "../../models/user";

@Component({
  selector: "pm-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  userData$: Observable<any> = this.store.select(selectUserData);
  shoppingCartList$: Observable<any> = this.store.select(selectShoppingCartList);
  shoppingCartList!: [];
  user: User = {username: "", password: "", email: "", phone: "", address: "", firstName: "", lastName: ""};
  buttonName!: string;
  isUserLoggedIn = false;
  userForm!: FormGroup;

  constructor(private store: Store<any>, private fb: FormBuilder, private router: Router) {}
  @Input() parentComponentName: string = "";

  ngOnInit(): void {
    this.getShoppingCartList();
    if (localStorage.getItem(Constants.IS_USER_LOGGED_IN) === "true") {
      this.isUserLoggedIn = true;
      this.getUserData();
    } else {
      this.constructFormForGuestUser();
    }
    this.setButtonName();
  }

  get userFormControl() {
    if (this.userForm != null) {
      return this.userForm.controls;
    }
    return null;
  }

  getShoppingCartList() {
    this.shoppingCartList$.subscribe((response) => {
      this.shoppingCartList = response;
      if (this.shoppingCartList.length === 0 && this.parentComponentName === "deliveryInfoComponent") {
        this.router.navigateByUrl("/products");
      }
    });
  }

  getUserData(): void {
    let username = JSON.parse(localStorage.getItem(Constants.LOGGED_USERNAME)!);
    this.store.dispatch(getUserProfile({username}));
    this.loadUserData();
  }

  loadUserData(): void {
    this.subscription.add(
      this.userData$.subscribe((response) => {
        this.user = response;
        if (response !== null) {
          this.constructFormForLoggedUser();
        }
      })
    );
  }

  setButtonName(): void {
    if (this.parentComponentName === "userComponent") {
      this.buttonName = "Save";
    } else {
      this.buttonName = "Order";
    }
  }

  makeRequest(): void {
    if (this.parentComponentName === "userComponent") {
      this.updateUserProfile();
    } else if (this.shoppingCartList.length > 0) {
      this.makeOrder();
    }
  }

  updateUserProfile() {
    let user = {
      username: this.userForm.get("username")!.value,
      password: "",
      email: this.userForm.get("email")!.value,
      phone: this.userForm.get("phone")!.value,
      address: this.userForm.get("address")!.value,
      firstName: this.userForm.get("firstName")!.value,
      lastName: this.userForm.get("lastName")!.value
    };
    this.store.dispatch(updateUserProfile({user}));
  }

  makeOrder(): void {
    let order: Order = {
      desiredDeliveryDate: null,
      deliveryServiceId: null,
      username: this.userForm.get("username")!.value,
      phone: this.userForm.get("phone")!.value,
      email: this.userForm.get("email")!.value,
      address: this.userForm.get("address")!.value,
      firstName: this.userForm.get("firstName")!.value,
      lastName: this.userForm.get("lastName")!.value,
      additionalInfo: "",
      items: this.shoppingCartList
    };
    this.store.dispatch(makeOrder({payload: {order}}));
  }

  constructFormForGuestUser(): void {
    this.userForm = this.fb.group({
      username: "",
      email: "",
      phone: "",
      address: "",
      firstName: "",
      lastName: ""
    });
    this.setFormValidators();
  }

  constructFormForLoggedUser(): void {
    this.userForm = this.fb.group({
      username: this.user?.username ? this.user?.username : "",
      email: this.user?.email ? this.user?.email : "",
      phone: this.user?.phone ? this.user?.phone : "",
      address: this.user?.address ? this.user?.address : "",
      firstName: this.user?.firstName ? this.user?.firstName : "",
      lastName: this.user?.lastName ? this.user?.lastName : ""
    });
    this.setFormValidators();
  }

  setFormValidators(): void {
    if (this.userForm === null) {
      return;
    }
    this.userForm.controls["username"].disable();

    let phoneRegEx = /^([0-9]{1}[1-9]{9})$/;
    let nameRegEx = /^[а-яА-Яa-zA-Z]+\s*$/;
    let emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

    if (this.parentComponentName === "userComponent") {
      this.setValidatorsForUserProfileData(phoneRegEx, nameRegEx, emailRegExp);
    } else if (this.parentComponentName === "deliveryInfoComponent") {
      this.setValidatorsForDeliveryData(phoneRegEx, nameRegEx, emailRegExp);
    }
  }

  setValidatorsForDeliveryData(phoneRegEx: RegExp, nameRegEx: RegExp, emailRegExp: RegExp) {
    if (!this.isUserLoggedIn) {
      this.userForm.controls["email"].enable();
    }
    this.userForm.controls.email.setValidators([Validators.required, Validators.pattern(emailRegExp)]);
    this.userForm.controls.phone.setValidators([Validators.required, Validators.minLength(10), Validators.pattern(phoneRegEx)]);
    this.userForm.controls.address.setValidators([Validators.required]);
    this.userForm.controls.firstName.setValidators([Validators.required, Validators.pattern(nameRegEx)]);
    this.userForm.controls.lastName.setValidators([Validators.required, Validators.pattern(nameRegEx)]);
  }

  setValidatorsForUserProfileData(phoneRegEx: RegExp, nameRegEx: RegExp, emailRegExp: RegExp): void {
    this.userForm.controls["email"].disable();
    this.userForm.controls.email.setValidators([Validators.pattern(emailRegExp)]);
    this.userForm.controls.phone.setValidators([Validators.pattern(phoneRegEx)]);
    this.userForm.controls.address.setValidators(null);
    this.userForm.controls.firstName.setValidators([Validators.pattern(nameRegEx)]);
    this.userForm.controls.lastName.setValidators([Validators.pattern(nameRegEx)]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
