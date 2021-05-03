import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompany1620053805059 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "companies",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "cnpj",
            type: "varchar",
            isUnique: true
          },
          {
            name: "demand",
            type: "decimal"
          },
          {
            name: "about",
            type: "varchar"
          },
          {
            name: "annual_billing_id",
            type: "uuid"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          }
        ],
        foreignKeys: [
          {
            name: "fk_annual_billings_company",
            referencedTableName: "annual_billings",
            referencedColumnNames: ["id"],
            columnNames: ["annual_billing_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("companies");
  }

}
