import "dotenv";
import express from "express";
import "./database";
import { getCustomRepository } from "typeorm";
import { AnnualBillingRepository } from "./repositories/AnnualBillingRepository";
import { CompanyRepository } from "./repositories/CompanyRepository";
import { CompanyService } from "./services/CompanyService";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const companyRepository = getCustomRepository(CompanyRepository);
  const companies = await companyRepository.find({
    relations: ["annual_billing"]
  });
  return res.json(companies);
});

app.get("/companies", async (req, res) => {
  const companyService = new CompanyService();
  const result = await companyService.findAll(req.query);
  return res.json(result);
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log("Server running on http://localhost:" + PORT));