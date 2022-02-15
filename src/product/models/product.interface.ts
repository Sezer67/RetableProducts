import { Category } from "src/category/models/category.interface";

export interface Product{
    id?:number;
    name?:string;
    stock?:number;
    createdAt?:Date;
    updatedAt?:Date;
    category:Category;
}