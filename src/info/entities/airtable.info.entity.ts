/* eslint-disable prettier/prettier */
import {Entity, Column, PrimaryGeneratedColumn, Index} from 'typeorm';

@Entity({ name: 'ta_airtable_info', comment: '에어테이블 정보' })
@Index(['service_id', 'table_name'])
export class AirtableInfo {
    @PrimaryGeneratedColumn()
    airtable_id: number;

    @Column({ comment: '서비스ID'})
    service_id: number;

    @Column({ length: 100 ,comment: '베이스명'})
    base_name: string;

    @Column({ length: 100 ,comment: '테이블명'})
    table_name: string;

    @Column({ length: 100 ,comment: 'API토큰'})
    api_token: string;

    @Column({ length: 100 ,comment: '베이스ID'})
    base_id: string;

    @Column({ length: 100 ,comment: '테이블ID'})
    table_id: string;

    @Column({ length: 8 ,comment: '생성일자'})
    create_date: string;

    @Column({ length: 8 ,comment: '갱신일자'})
    update_date: string;

    @Column({ length: 1 ,comment: '삭제여부'})
    delete_yn: string;
}