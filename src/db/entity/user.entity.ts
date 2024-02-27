import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity('user')
export class User extends BaseEntity {
    
    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    phone?: string;

    @Column()
    password: string;
    
}