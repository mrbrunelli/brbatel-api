import { Request, Response } from "express";
import { HttpStatus } from "../helpers/HttpStatus";
import { CompanyService } from "../services/CompanyService";

export class CompanyController {
  async findAll(req: Request, res: Response) {
    try {
      const companyService = new CompanyService();
      const company = await companyService.findAll(req.query);
      return HttpStatus.ok(res, company);
    } catch (e) {
      return HttpStatus.serverError(res);
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const companyService = new CompanyService();
      const company = await companyService.findById(id);
      return HttpStatus.ok(res, company);
    } catch (e) {
      return HttpStatus.serverError(res);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const companyService = new CompanyService();
      const company = await companyService.create(req.body);
      return HttpStatus.ok(res, company);
    } catch (e) {
      return HttpStatus.serverError(res);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const companyService = new CompanyService();
      await companyService.update({ id, ...req.body });
      return HttpStatus.ok(res, undefined);
    } catch (e) {
      console.log(e.message)
      return HttpStatus.serverError(res);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const companyService = new CompanyService();
      companyService.delete(id);
      return HttpStatus.ok(res, undefined);
    } catch (e) {
      return HttpStatus.serverError(res);
    }
  }
}