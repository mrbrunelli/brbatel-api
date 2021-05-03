import { EntityRepository, Repository } from "typeorm";
import { Company } from "../entities/Company";

@EntityRepository(Company)
export class CompanyRepository extends Repository<Company> { }