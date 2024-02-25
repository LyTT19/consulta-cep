import { Injectable } from "@nestjs/common"

// This should be a real class/interface representing a user entity
export type User = any

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: "jackson",
      password: "101010",
    },
    {
      userId: 2,
      username: "joao",
      password: "123123",
    },
  ]

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username)
  }
}
