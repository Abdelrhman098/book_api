import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import {AdminModule} from './admin/admin.module';
import { UserModule } from './user/user.module';
import {Book} from'./entities/book.entity';
import {Review}from './entities/review.entity';
import { Admin } from './entities/admin.entity';
import {User} from './entities/user.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: "localhost",
      port:  3306,
      username:'root',
      password:'',
      database:'book_review_db',
      entities: [Admin, User, Book, Review],
      synchronize: true, 
      
    }),
    AdminModule,
    UserModule,
  ],
})
export class AppModule {}