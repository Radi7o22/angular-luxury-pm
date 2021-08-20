import {ItemInOrder} from "./item-in-order";

export class Order {
  desiredDeliveryDate!: Date;
  deliveryServiceId!: number;
  userId!: number;
  firstName!: string;
  lastName!: string;
  address!: string;
  additionalInfo!: string;
  items!: ItemInOrder[];
}
