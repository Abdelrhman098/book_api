import { Controller, Post,Body,Param, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { CreateReviewDto } from "./dto/create-review.dto";


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto);
  }

  @Post('review/:bookId')
  reviewBook(@Param('bookId') bookId: string, @Body() createReviewDto: CreateReviewDto) {
    return this.userService.reviewBook(+bookId, createReviewDto);
  }
}
