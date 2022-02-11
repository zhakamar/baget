import {AddBaseModel} from "../components/add-base/add-base.model";

export interface ExtrasRef extends AddBaseModel {
  price: number;
  sizeDep: boolean;
  glass: boolean;
}
