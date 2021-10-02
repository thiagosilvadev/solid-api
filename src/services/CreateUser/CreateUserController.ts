import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, name, password } = req.body;
    try {
      const user = await this.createUserService.execute({
        email,
        name,
        password,
      });

      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({
        error: (error as Error).message || "Error",
      });
    }
  }
}
