import { Request, Response, Router } from "express";
import { HttpStatus } from "../helpers/HttpStatus";

export const presentationRoutes = Router();

presentationRoutes.get("/", async (req: Request, res: Response) => {
  return HttpStatus.ok(res, {
    title: "BrBatel API Service",
    message: "Seja muito bem vindo! Consulte a documentação da API:",
    url: "https://github.com/mrbrunelli/brbatel-api/tree/master/api-docs"
  })
});