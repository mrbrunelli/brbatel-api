import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedCompany1620677233302 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO companies (id, name, cnpj, demand, about, annual_billing_id) values
      ('9057136f-c50f-47f2-8135-c697537def7c', 'Florai', '45248633000151', 580000, 'Rede de supermercados', '16ed01bd-1115-4534-b694-4f8f0a2420fc'),
      ('8e2bfed9-19f7-4fa3-853d-386f2d6e7a6c', 'Bom Preço', '07945296000162', 420000, 'Rede de supermercados', '45413c0f-2ae0-4a96-a7af-f8b63a51ee2a'),
      ('d9c9e40d-f0e5-43f1-8580-d80fdf8c4d32', 'Pais e Filhos', '34817519000189', 370000, 'Rede de supermercados', '45413c0f-2ae0-4a96-a7af-f8b63a51ee2a'),
      ('ba1ed8c7-79f0-47df-b20b-19d4b0c787b0', 'Açaí do Zé', '12485868000108', 12800, 'Comércio de sorvetes', '66555b30-2dc0-478d-a18f-246d948553d8'),
      ('d9506633-147a-48bf-ad7c-542115d6b987', 'Pet Mania', '20718850000137', 17600, 'Comércio de produtos e serviços para animais domésticos', '66555b30-2dc0-478d-a18f-246d948553d8')
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DELETE FROM companies");
  }

}
