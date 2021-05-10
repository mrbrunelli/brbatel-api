import { Router } from "express";
import { presentationRoutes } from "./presentation-routes";
import { companyRoutes } from "./company-routes";
import { annualBillingRoutes } from "./annual-billing-routes";

export const routes = Router();

routes.use("/", presentationRoutes);
routes.use("/companies", companyRoutes);
routes.use("/annual-billings", annualBillingRoutes);
