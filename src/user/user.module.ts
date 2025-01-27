import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from '../entities/user.entity';
import { Book } from '../entities/book.entity';
import { Review } from '../entities/review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Book, Review])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
