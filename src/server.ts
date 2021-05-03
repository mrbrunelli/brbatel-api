import "dotenv";
import express from "express";
import "./database";
import { getCustomRepository } from "typeorm";
import { AnnualBillingRepository } from "./repositories/AnnualBillingRepository";
import { CompanyRepository } from "./repositories/CompanyRepository";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const companyRepository = getCustomRepository(CompanyRepository);
  const companies = await companyRepository.find({
    relations: ["annual_billing"]
  });
  return res.json(companies);
})

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log("Server running on http://localhost:" + PORT));