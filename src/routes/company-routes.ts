import { Router } from "express";
import { CompanyController } from "../controllers/CompanyController";
import {
  validateCompanyCreateBody,
  validateCompanyParams,
  validateCompanyQuery,
  validateCompanyUpdateBody
} from "../middlewares/validator";

export const companyRoutes = Router();

const companyController = new CompanyController();
companyRoutes.get("/", validateCompanyQuery, companyController.findAll);
companyRoutes.get("/:id", validateCompanyParams, companyController.findById);
companyRoutes.post("/", validateCompanyCreateBody, companyController.create);
companyRoutes.put("/:id", validateCompanyParams, validateCompanyUpdateBody, companyController.update);
companyRoutes.delete("/:id", validateCompanyParams, companyController.delete);
