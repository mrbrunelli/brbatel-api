import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedAnnualBilling1620062873046 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO annual_billings (id, description) VALUES 
      ('66555b30-2dc0-478d-a18f-246d948553d8', 'Até R$ 10 milhões'),
      ('05adb65e-e025-4b5d-af70-bcd3fb366d78', 'Até R$ 10 a R$ 50 milhões'),
      ('16ed01bd-1115-4534-b694-4f8f0a2420fc', 'Até R$ 50 a R$ 200 milhões'),
      ('5b239fc9-89fc-44dd-a599-4a0d6b4a015e', 'Até R$ 200 a R$ 500 milhões'),
      ('45413c0f-2ae0-4a96-a7af-f8b63a51ee2a', 'Acima de R$ 500 milhões')
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DELETE FROM annual_billings");
  }

}
