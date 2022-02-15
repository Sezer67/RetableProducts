import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProductEntity } from '../models/product.entity';
import { Product } from '../models/product.interface';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(ProductEntity) private readonly repository:Repository<ProductEntity>){}
    
    create(product:Product):Promise<Product>{
        return this.repository.save(product);
    }

    getById(id:number):Promise<Product>{
        return this.repository.createQueryBuilder('p')
                              .where('p.id=:id',{id})
                              .leftJoinAndSelect('p.category','category')
                              .getOne();
    }

    async updateById(id:number,product:Product):Promise<UpdateResult>{
        return this.repository.update(id,product);
    }

    delete(id:number):Promise<DeleteResult>{
        return this.repository.delete(id);
    }
}
