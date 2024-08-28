import { Controller, Post, Put, Delete, Get, Param, Body } from '@nestjs/common';
import { AdminService } from './admin.server';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import  { CreateBookDto } from './dto/create-book.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
 

  @Post('create')
  createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.createAdmin(createAdminDto);
  }

  @Put('user/update/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.adminService.updateUser(+id, updateUserDto);
  }

  @Delete('user/delete/:id')
  deleteUser(@Param('id') id: string) {
    return this.adminService.deleteUser(+id);
  }

  @Get('books/most-reviewed')
  getMostReviewedBooks() {
    return this.adminService.getMostReviewedBooks();
  }

  @Post('book/create')
  async createBook(@Body() createBookDto: CreateBookDto) {
    return this.adminService.createBook(createBookDto);
  }
}
