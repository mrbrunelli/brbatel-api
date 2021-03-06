import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("annual_billings")
export class AnnualBilling {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}