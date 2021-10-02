import { User } from "../../entities/User";
import { UsersRepository } from "../UsersRepository";

export class LocalUsersRepository implements UsersRepository {
  private users: User[] = [];
  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);
    //@ts-ignore
    return user;
  }
  async save(user: User): Promise<User> {
    this.users.push(user);

    return user;
  }
}
