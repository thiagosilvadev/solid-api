import { LocalUsersRepository } from "../../repositories/implementations/LocalUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";

const localUsersRepository = new LocalUsersRepository();
const createUserService = new CreateUserService(localUsersRepository);
const createUserController = new CreateUserController(createUserService);

export { createUserService, createUserController };
