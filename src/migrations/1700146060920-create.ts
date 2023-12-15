import { MigrationInterface, QueryRunner } from "typeorm"

export class Create1700146060920 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
             CREATE TABLE "user" (
             "id" SERIAL NOT NULL,
             "name" character varying NOT NULL,
             "lastname" character varying NOT NULL,
             "phone" character varying,
             "createDate" TIMESTAMP NOT NULL DEFAULT now(),
             "updateDate" TIMESTAMP NOT NULL DEFAULT now(),
              CONSTRAINT "PK_55bbdeb14e0b1d7ab417d11ee6d" PRIMARY KEY ("id")
              )
            `);
     
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
