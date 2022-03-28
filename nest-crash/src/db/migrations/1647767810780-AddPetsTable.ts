import {MigrationInterface, QueryRunner} from "typeorm";

export class AddPetsTable1647767810780 implements MigrationInterface {
    name = 'AddPetsTable1647767810780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pet" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "userId" bigint, CONSTRAINT "PK_b1ac2e88e89b9480e0c5b53fa60" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_4eb3b1eeefc7cdeae09f934f479" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_4eb3b1eeefc7cdeae09f934f479"`);
        await queryRunner.query(`DROP TABLE "pet"`);
    }

}
