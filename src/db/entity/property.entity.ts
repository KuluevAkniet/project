import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity('property')
export class Property extends BaseEntity {

    @Column()
    type: string;

    @Column()
    area: string;

    @Column()
    prephoto: string;

    @Column('text', {array: true,})
    photos: string[];
    
    @Column()
    rooms: number;

    @Column()
    square: number;

    @Column()
    price: number;

    @Column()
    series: string;

    @Column()
    apartmenttype: string;

    @Column()
    views: number;
    
    @Column()
    favorites: string;

    @Column()
    floor: number;

    // @Column('simple-array', {array: true})
    // security: string[];

    // @Column('simple-array', {array: true})
    // others: string[];
    
    // @Column('simple-array', {array: true})
    // documents: string[];

    @Column()
    city: string;

    @Column()
    addres: string;

    @Column()
    finishing: string;

    @Column()
    wallstype: string;

    @Column()
    longitude: number;

    @Column()
    latitude: number;

}