import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1705398713624 implements MigrationInterface {
    name = 'Migrations1705398713624'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "banner" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "subtitle" character varying NOT NULL, "video" character varying NOT NULL, CONSTRAINT "PK_6d9e2570b3d85ba37b681cd4256" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "property" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "area" character varying NOT NULL, "prephoto" character varying NOT NULL, "photos" text array NOT NULL, "rooms" integer NOT NULL, "square" integer NOT NULL, "price" integer NOT NULL, "series" character varying NOT NULL, "apartmenttype" character varying NOT NULL, "views" integer NOT NULL, "favorites" character varying NOT NULL, "floor" integer NOT NULL, "city" character varying NOT NULL, "addres" character varying NOT NULL, "finishing" character varying NOT NULL, "wallstype" character varying NOT NULL, "longitude" integer NOT NULL, "latitude" integer NOT NULL, CONSTRAINT "PK_d80743e6191258a5003d5843b4f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "team" ("id" SERIAL NOT NULL, "position" character varying NOT NULL, "photo" character varying NOT NULL, "names" character varying NOT NULL, CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "lastname" character varying NOT NULL, "phone" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "team"`);
        await queryRunner.query(`DROP TABLE "property"`);
        await queryRunner.query(`DROP TABLE "banner"`);
    }

}
