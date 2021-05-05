import { NextFunction, Request, Response, Router } from "express";
import { CompanyController } from "../controllers/CompanyController";
import { validateCompanyQuery } from "../middlewares/validator";

export const companyRoutes = Router();

const companyController = new CompanyController();
companyRoutes.get("/", validateCompanyQuery, companyController.findAll);
companyRoutes.post("/", companyController.create);
