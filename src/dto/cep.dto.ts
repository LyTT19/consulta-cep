import { IsNotEmpty, IsString, IsIn } from "class-validator"

export class CepDto {
  @IsNotEmpty()
  @IsString()
  cep: string

  @IsNotEmpty()
  @IsIn(["xml", "json"])
  format: "xml" | "json"
}
