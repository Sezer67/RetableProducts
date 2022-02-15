import { ProductEntity } from "../../product/models/product.entity";
import { Column, Entity, JoinColumn, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('category')
export class CategoryEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:false,unique:true})
    name:string

    @OneToMany(()=>ProductEntity, products=>products.id)
    @JoinTable()
    products:ProductEntity[];
}