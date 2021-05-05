import { Request, Response } from "express";
import { HttpStatus } from "../helpers/HttpStatus";
import { AnnualBillingService } from "../services/AnnualBillingService";

export class AnnualBillingController {
  async findAll(req: Request, res: Response) {
    try {
      const annualBillingsService = new AnnualBillingService();
      const annualBillings = await annualBillingsService.findAll();
      return HttpStatus.ok(res, annualBillings);
    } catch (e) {
      return HttpStatus.serverError(res);
    }
  }
}