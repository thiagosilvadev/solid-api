import { Router } from "express";
import { createUserController } from "../services/CreateUser";

const router = Router();

router.get("/", (req, res) => {
  res.status(201).json({
    ok: true,
  });
});

router.post("/users/store", (req, res) => {
  return createUserController.handle(req, res);
});

export { router };
