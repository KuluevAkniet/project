import { Column } from "typeorm";
import { BaseEntity } from "./base.entity";

export class User extends BaseEntity {
    
    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    phone?: string;
    
}