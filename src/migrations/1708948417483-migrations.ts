import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1708948417483 implements MigrationInterface {
    name = 'Migrations1708948417483'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "weather" ("id" SERIAL NOT NULL, "lon" integer NOT NULL, "lan" integer NOT NULL, CONSTRAINT "PK_af9937471586e6798a5e4865f2d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "weather"`);
    }

}
