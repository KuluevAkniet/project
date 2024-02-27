import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity('banner')
export class Banner extends BaseEntity {
   
    @Column()
    title: string;

    @Column()
    subtitle: string;

    @Column()
    video: string
}