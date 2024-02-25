import { Body, Controller, Post, HttpCode, HttpStatus } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { User } from "../dto/user.dto"


@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  signIn(@Body() signInDto: User) {
    return this.authService.signIn(signInDto.username, signInDto.password)
  }
}
