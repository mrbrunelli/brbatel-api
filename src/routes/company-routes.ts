import { Router } from "express";
import { CompanyController } from "../controllers/CompanyController";
import { validateCompanyBody, validateCompanyParams, validateCompanyQuery } from "../middlewares/validator";

export const companyRoutes = Router();

const companyController = new CompanyController();
companyRoutes.get("/", validateCompanyQuery, companyController.findAll);
companyRoutes.get("/:id", validateCompanyParams, companyController.findById);
companyRoutes.post("/", validateCompanyBody, companyController.create);
