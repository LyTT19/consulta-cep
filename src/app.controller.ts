import { Body, Controller, Param, Post, UseGuards } from "@nestjs/common"
import { AppService } from "./app.service"
import { CepDto } from "./dto/cep.dto"
import { AuthGuard } from "./auth/auth.guard"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard)
  @Post("cep/:cep")
  async getCep(@Param("cep") cep: string): Promise<any> {
    return await this.appService.getCep(cep)
  }

  @UseGuards(AuthGuard)
  @Post("cep")
  async getCepPost(@Body() cepDto: CepDto): Promise<any> {
    return await this.appService.getCepFormat(cepDto.cep, cepDto.format)
  }
}
