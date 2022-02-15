import { CategoryEntity } from "../../category/models/category.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('product')
export class ProductEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    name:string;

    @Column()
    stock:number;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'NOW()' })
    createdAt:Date;

    @UpdateDateColumn({type:'timestamptz', onUpdate:'NOW()' ,nullable:true})
    updatedAt:Date;

    @ManyToOne(()=>CategoryEntity,category=>category.id)
    @JoinColumn({name:'cat_id',referencedColumnName:'id'})
    category:CategoryEntity;
}