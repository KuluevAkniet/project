import {Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity('team')
export class Team extends BaseEntity {
   
    @Column()
    position: string;

    @Column()
    photo: string;

    @Column()
    names: string
}