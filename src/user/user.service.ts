import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { Review } from '../entities/review.entity';
import { Book } from '../entities/book.entity';
import { CreateUserDto  } from './dto/create-user.dto';
import { CreateReviewDto } from './dto/create-review.dto';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Book)
        private bookRepository: Repository<Book>,
        @InjectRepository(Review)
        private reviewRepository: Repository<Review>,
    ) {}

    async register(createUserDto: CreateUserDto) {
        const user = this.userRepository.create(createUserDto);
        return this.userRepository.save(user);
      }


      async reviewBook(bookId: number, createReviewDto: CreateReviewDto) {
        const user = await this.userRepository.findOneBy({ id: createReviewDto.userId });
        const book = await this.bookRepository.findOneBy({ id: bookId });
        if (!user || !book) throw new Error('User or Book not found');
    
        const review = this.reviewRepository.create({ ...createReviewDto, user, book });
        return this.reviewRepository.save(review);
    }
  }
