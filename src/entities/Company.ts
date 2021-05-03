import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { AnnualBilling } from "./AnnualBilling";
import { v4 as uuid } from "uuid";

@Entity("companies")
export class Company {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  demand: number;

  @Column()
  about: string;

  @JoinColumn({ name: "annual_billing_id" })
  @ManyToOne(() => AnnualBilling)
  annual_billing: AnnualBilling;

  @Column()
  annual_billing_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}