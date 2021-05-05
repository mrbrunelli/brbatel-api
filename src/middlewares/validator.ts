import { NextFunction, Request, Response } from "express";
import { validationResult, query } from "express-validator";
import { HttpStatus } from "../helpers/HttpStatus";

export const validate = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return HttpStatus.unprocessable(res, { errors: errors.array() });
  }
  return next();
}

export const companyQueryValidation = [
  query("demand")
    .optional()
    .matches(/^\d+\,\s*?\d+/g)
    .withMessage("Deve ser informado apenas dois valores, e separados por ','"),
  query("created_at")
    .optional()
    .matches(/^(\d{4})-(\d{02})-(\d{02})\,\s?(\d{4})-(\d{2})-(\d{2})$/g)
    .withMessage("As datas devem ser informadas no padrão yyyy-mm-dd, e separadas por ','"),
  query("cnpj")
    .optional()
    .matches(/^\d{14}/g)
    .withMessage("O CNPJ deve ser informado com 14 dígitos, sem pontos, traços ou barra"),
  validate
];
