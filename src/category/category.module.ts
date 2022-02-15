import { Module } from '@nestjs/common';
import { CategoryService } from './services/category.service';
import { CategoryController } from './controllers/category.controller';
import { CategoryEntity } from './models/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([CategoryEntity])
  ],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}
