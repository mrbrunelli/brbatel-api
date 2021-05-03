import { EntityRepository, Repository } from "typeorm";
import { AnnualBilling } from "../entities/AnnualBilling";

@EntityRepository(AnnualBilling)
export class AnnualBillingRepository extends Repository<AnnualBilling> { }