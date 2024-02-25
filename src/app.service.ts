import { Injectable, BadRequestException } from "@nestjs/common"
import axios from "axios"
import * as NodeCache from "node-cache"

@Injectable()
export class AppService {
  private cache: NodeCache

  constructor() {
    this.cache = new NodeCache({ stdTTL: 300 }) // 5 minutes
  }

  // requisição para retorno de cep em formato json por parametro
  async getCep(cep: string): Promise<any> {
    if (!cep || cep.length !== 8) {
      throw new BadRequestException("CEP inválido")
    }

    try {
      const cachedData: any = this.cache.get(cep)
      if (cachedData) {
        cachedData.source = "cache"
        return cachedData
      }

      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      this.cache.set(cep, response.data)
      response.data.source = "viacep"
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  // requisição para retorno de cep em formato json ou xml por body
  async getCepFormat(cep: string, format: string): Promise<any> {
    if (!cep || cep.length !== 8) {
      throw new BadRequestException("CEP inválido")
    }

    if (!format || !["json", "xml"].includes(format)) {
      throw new BadRequestException("Formato inválido")
    }

    try {
      const cachedData: any = this.cache.get(`${cep}-${format}`)
      if (cachedData) {
        return cachedData
      }

      const response = await axios.get(
        `https://viacep.com.br/ws/${cep}/${format}/`,
      )
      this.cache.set(`${cep}-${format}`, response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}
