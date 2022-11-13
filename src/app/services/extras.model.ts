import { AddBaseModel } from "../components/add-base/add-base.model";


export interface GlassRef extends AddBaseModel {
  price: number;
  sizeDep: boolean;
}

export interface ExtrasRef extends AddBaseModel {
  price: number;
  sizeDep: boolean;
  formControlName: string;
}
