import { Request, Response } from "express";
import { HttpStatus } from "../helpers/HttpStatus";

export const notFoundRoute = async (req: Request, res: Response) => {
  return HttpStatus.notFound(res, {
    calledUrl: req.originalUrl,
    message: "Rota não encontrada. Consulte a documentação da API:",
    url: "https://github.com/mrbrunelli/brbatel-api/tree/master/api-docs"
  });
}
