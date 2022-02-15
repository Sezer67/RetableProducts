import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/product/models/product.entity';
import { Repository } from 'typeorm';
import { CategoryEntity } from '../models/category.entity';
import { Category } from '../models/category.interface';

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(CategoryEntity) private readonly repository:Repository<CategoryEntity>){}

    create(category:Category):Promise<Category>{
        return this.repository.save(category);
    }
    getById(id:number):Promise<Category>{
        return this.repository.findOne({id});
    }

    
}
