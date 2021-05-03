import "dotenv";
import express from "express";
import "./database";
import { getCustomRepository } from "typeorm";
import { AnnualBillingRepository } from "./repositories/AnnualBillingRepository";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const annualBillingsRepository = getCustomRepository(AnnualBillingRepository);
  const annualBillings = await annualBillingsRepository.find();
  return res.json(annualBillings);
})

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log("Server running on http://localhost:" + PORT));