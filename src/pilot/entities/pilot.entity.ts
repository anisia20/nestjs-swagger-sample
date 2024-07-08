/* eslint-disable prettier/prettier */
import {Entity, Column, PrimaryGeneratedColumn, Index} from 'typeorm';

@Entity({ name: 'ta_franchise' })
@Index(['airtable_id', 'name', 'tel', 'create_date', 'delete_yn'])
@Index(['name', 'tel'], { unique: true })
export class Franchise {
    @PrimaryGeneratedColumn()
    franchise_id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 20 })
    tel: string;

    @Column()
    airtable_id: number;

    @Column({ length: 100 })
    airtable_key: string;

    @Column({ length: 4000 })
    comment: string;

    @Column({ length: 1 })
    delete_yn: string;

    @Column({ length: 8 })
    create_date: string;

    @Column({ length: 8 })
    update_date: string;
}