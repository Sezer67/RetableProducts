import { Product } from "src/product/models/product.interface";

export interface Category{
    id?:number;
    name:string;
    products?:Product[]
}