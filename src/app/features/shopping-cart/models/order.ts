import {ItemInOrder} from "./item-in-order";

export class Order {
  desiredDeliveryDate!: Date | null;
  deliveryServiceId!: number | null;
  username!: number;
  firstName!: string;
  lastName!: string;
  address!: string;
  phone!: number;
  email!: string;
  additionalInfo!: string;
  items!: ItemInOrder[];
}
