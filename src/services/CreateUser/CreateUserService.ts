import { User } from "../../entities/User";
import { UsersRepository } from "../../repositories/UsersRepository";
import { createUserRequestDTO } from "./CreateUserDTO";

export class CreateUserService {
  constructor(private usersRepository: UsersRepository) {}

  async execute(data: createUserRequestDTO) {
    const userExists = await this.usersRepository.findByEmail(data.email);

    if (userExists) {
      throw new Error("User exists");
    }
    const user = new User(data);
    const { id } = await this.usersRepository.save(user);

    return id;
  }
}
