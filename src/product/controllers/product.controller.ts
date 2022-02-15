import { Body, Controller, Delete, Get, HttpException, Param, Post, Put } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Product } from '../models/product.interface';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {
    constructor(private service:ProductService){}

    createResponse(msg:string,description:string,status:number){
        throw new HttpException({msg,description},status);
    }

    @Post()
    create(@Body() product:Product):Promise<Product>{
        
        console.log(product.category);
        if(!product.category)
            this.createResponse('Hatalı Giriş','category parametresini eksik girdiniz.',400);
        else{
            return this.service.create(product);
        }
    }

    @Get(':id')
    async getById(@Param('id') id:number):Promise<Product>{
        const product = await this.service.getById(id);
        if(!product)
            this.createResponse('Hatalı Giriş','Bu id numarasına ait ürün bulunamadı.',400);
        else
            return product;
    }

    @Put(':id')
    async updateById(@Param('id') id:number,@Body() product:Product):Promise<UpdateResult>{
        const uProduct = this.service.updateById(id,product);

        if((await uProduct).affected == 0)
            this.createResponse('Hatalı Giriş','Bu id numarasına ait ürün bulunamadı.',400);
        else
            return uProduct;
    }

    @Delete(':id')
    async deleteById(@Param('id') id:number):Promise<DeleteResult>{
        const product = await this.service.delete(id);
        if(product.affected == 0)
            this.createResponse('Hatalı Giriş','Bu id numarasına ait ürün bulunamadı.',400);
        else
            return product;
    }
}
