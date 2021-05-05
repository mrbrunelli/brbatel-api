import { Router } from "express";
import { companyRoutes } from "./company-routes";
import { annualBillingRoutes } from "./annual-billing-routes";

export const routes = Router();

routes.use("/companies", companyRoutes);
routes.use("/annual-billings", annualBillingRoutes);
