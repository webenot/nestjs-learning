import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserMigration1647530801673 implements MigrationInterface {
  name = 'UserMigration1647530801673';

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "user"
                             (
                                 "id"   BIGSERIAL            NOT NULL,
                                 "name" character varying NOT NULL,
                                 "age"  integer,
                                 CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
                             )`);
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }

}
