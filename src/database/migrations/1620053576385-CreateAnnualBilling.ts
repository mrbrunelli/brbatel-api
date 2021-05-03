import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAnnualBilling1620053576385 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "annual_billings",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "description",
            type: "varchar"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("annual_billings");
  }

}
