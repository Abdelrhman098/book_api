import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from '../entities/admin.entity';
import { User } from '../entities/user.entity';
import { Book } from '../entities/book.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateBookDto } from './dto/create-book.dto';

Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin)
        private  adminRepository: Repository<Admin>,
        @InjectRepository(User)
        private  userRepository: Repository<User>,
        @InjectRepository(Book)
        private  bookRepository: Repository<Book>,
    ) {}

async createAdmin(createAdminDto:CreateAdminDto ){
const admin = this.adminRepository.create(createAdminDto);
return this.adminRepository.save(admin);
}

async updateUser( id:number, updateUserDto:UpdateUserDto){
    await this.userRepository.update(id,updateUserDto);
    return this.userRepository.findOneBy({id});
}

async deleteUser(id:number){
    await this.userRepository.delete(id);
    return {message : 'user delete successfully'}
    }


    async createBook(createBookDto: CreateBookDto): Promise<Book> {
        const newBook = this.bookRepository.create(createBookDto);
        return this.bookRepository.save(newBook);
      }
    

    async getMostReviewedBooks() {
        return this.bookRepository
          .createQueryBuilder('book')
          .leftJoinAndSelect('book.reviews', 'review')
          .loadRelationCountAndMap('book.reviewCount', 'book.reviews')
          .orderBy('book.reviewCount', 'DESC')
          .getMany();
      }

}