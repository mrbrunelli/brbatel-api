import { Between, Equal, getCustomRepository, ILike, Repository } from "typeorm";
import { Company } from "../entities/Company";
import { CompanyRepository } from "../repositories/CompanyRepository";

interface ICompanyFindAll {
  name?: string;
  cnpj?: string;
  demand?: string;
  created_at?: string;
  page?: number;
  limit?: number;
}

interface ICompanyCreate {
  name: string;
  cnpj: string;
  demand: number;
  about: string;
  annual_billing_id: string;
}

export class CompanyService {
  private companyRepository: Repository<Company>

  constructor() {
    this.companyRepository = getCustomRepository(CompanyRepository);
  }

  async create({ name, cnpj, demand, about, annual_billing_id }: ICompanyCreate) {
    const companyAlreadyExists = await this.companyRepository.findOne({
      cnpj
    });
    if (companyAlreadyExists) {
      throw new Error("Essa Empresa já está cadastrada no sistema.");
    }
    const company = await this.companyRepository.create({
      name, cnpj, demand, about, annual_billing_id
    });
    await this.companyRepository.save(company);
    return company;
  }

  async findAll({ name, cnpj, demand, created_at, limit, page }: ICompanyFindAll) {
    const { take, skip } = this.paginate(limit, page);
    const findOptions = this.validateCompanyFindOptions(name, cnpj, demand, created_at);
    const [companies, total] = await this.companyRepository.findAndCount({
      where: findOptions,
      relations: ["annual_billing"],
      order: {
        name: "ASC"
      },
      take,
      skip
    });
    return {
      total,
      page: skip / take,
      companies
    }
  }

  private paginate(limit: number, page: number) {
    if (limit > 20) {
      limit = 20;
    }
    const take = limit || 10;
    const skip = (page || 0) * take;
    return {
      take,
      skip
    }
  }

  private validateCompanyFindOptions(
    name: string = undefined,
    cnpj: string = undefined,
    demand: string = undefined,
    created_at: string = undefined
  ) {
    const params = {};
    const rangeDate = created_at ? created_at.replace(/\s/g, "").split(",") : undefined;
    const rangeDemand = demand ? demand.replace(/\s/g, "").split(",") : undefined;
    if (name) {
      Object.assign(params, { name: ILike(`%${name}%`) });
    }
    if (cnpj) {
      Object.assign(params, { cnpj: Equal(cnpj) });
    }
    if (rangeDemand) {
      Object.assign(params, { demand: Between(rangeDemand[0], rangeDemand[1]) });
    }
    if (rangeDate) {
      Object.assign(params, { created_at: Between(rangeDate[0], rangeDate[1]) });
    }
    return params;
  }
}