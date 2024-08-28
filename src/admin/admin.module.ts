import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.server';
import { Admin } from '../entities/admin.entity';
import { User } from '../entities/user.entity';
import { Book } from '../entities/book.entity';
import { Review } from '../entities/review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Admin, User, Book, Review])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
