import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap()

//falta criar a documentação com a instrução de como rodar e testar pelo insomnia e tambem adicionar alguma forma de autenticação para acessar a api
