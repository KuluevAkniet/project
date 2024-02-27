import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity()
export class Weather extends BaseEntity {
    @Column()
    lon: number;
    
    @Column()
    lan: number;
}