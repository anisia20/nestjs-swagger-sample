/* eslint-disable prettier/prettier */
import {Entity, Column, PrimaryGeneratedColumn, Index, PrimaryColumn} from 'typeorm';

@Entity({ name: 'ta_user',comment: '유저' })
@Index(['create_date', 'delete_yn'])
@Index(['user_id'], { unique: true })
export class User {

    @PrimaryGeneratedColumn()
    user_code: number;

    @Column({ length: 100 ,comment: '유저 아이디'})
    user_id: string;

    @Column({ length: 255 ,comment: '유저 패스워드'})
    user_pass: string;

    @Column({ length: 100 ,comment: '유저 명'})
    user_name: string;

    @Column({ length: 8 ,comment: '생성일자'})
    create_date: string;

    @Column({ length: 8 ,comment: '갱신일자'})
    update_date: string;

    @Column({ length: 1 ,comment: '삭제여부'})
    delete_yn: string;
}