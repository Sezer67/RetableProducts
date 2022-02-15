import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryEntity } from '../models/category.entity';
import { Category } from '../models/category.interface';
import { CategoryService } from '../services/category.service';

@Controller('category')
export class CategoryController {
    constructor(private service:CategoryService){}

    @Post()
    create(@Body() category:Category):Promise<Category>{
        return this.service.create(category);
    }

    @Get(':id')
    getById(@Param('id') id:number):Promise<Category>{
        return this.service.getById(id);
    }

}
