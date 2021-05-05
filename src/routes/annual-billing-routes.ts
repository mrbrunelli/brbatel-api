import { Router } from "express";
import { AnnualBillingController } from "../controllers/AnnualBillingController";

export const annualBillingRoutes = Router();

const annualBillingController = new AnnualBillingController();
annualBillingRoutes.get("/", annualBillingController.findAll);
