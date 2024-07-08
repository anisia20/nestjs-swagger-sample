/* eslint-disable prettier/prettier */
import {Entity, Column, PrimaryGeneratedColumn, Index} from 'typeorm';

@Entity({ name: 'ta_service_info',comment: '서비스 정보' })
@Index(['domain'])
export class ServiceInfo {

    @PrimaryGeneratedColumn()
    service_id: number;

    @Column({ length: 100 ,comment: '서비스명'})
    service_name: string;

    @Column({ length: 100 ,comment: '도메인명'})
    domain: string;

    @Column({ length: 8 ,comment: '생성일자'})
    create_date: string;

    @Column({ length: 8 ,comment: '갱신일자'})
    update_date: string;

    @Column({ length: 1 ,comment: '삭제여부'})
    delete_yn: string;
}