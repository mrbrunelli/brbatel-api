import { Router } from "express";
import { CompanyController } from "../controllers/CompanyController";

export const companyRoutes = Router();

const companyController = new CompanyController();
companyRoutes.get("/", companyController.findAll);
companyRoutes.post("/", companyController.create);