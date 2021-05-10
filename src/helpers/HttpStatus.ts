import { Response } from "express";

export class HttpStatus {
  static ok(res: Response, data: any) {
    return res.json(data);
  }

  static badRequest(res: Response, message: string) {
    return res.status(400).json(message);
  }

  static unauthorized(res: Response, message: string) {
    return res.status(401).json(message);
  }

  static notFound(res: Response, data: any) {
    return res.status(404).json(data);
  }

  static unprocessable(res: Response, data: any) {
    return res.status(422).json(data);
  }

  static serverError(res: Response) {
    return res.status(500).json("Ocorreu um erro inesperado no servidor.");
  }
}
