import {Image} from "./image";

export class ItemDetails {
  id!: number;
  name!: string;
  price!: number;
  color!: string;
  width!: number;
  length!: number;
  thickness!: number;
  height!: number;
  description!: string;
  categoryName!: string;
  subcategoryName!: string;
  images!: Image[];
}
