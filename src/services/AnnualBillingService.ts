import { getCustomRepository, Repository } from "typeorm";
import { AnnualBilling } from "../entities/AnnualBilling";
import { AnnualBillingRepository } from "../repositories/AnnualBillingRepository";

export class AnnualBillingService {
  private annualBillingRepository: Repository<AnnualBilling>;

  constructor() {
    this.annualBillingRepository = getCustomRepository(AnnualBillingRepository);
  }

  async findAll() {
    const annualBillings = await this.annualBillingRepository.find();
    return annualBillings;
  }
}