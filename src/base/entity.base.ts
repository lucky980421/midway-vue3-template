import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { eValid } from "../interface";


export class BaseEntity {

    @PrimaryGeneratedColumn()
    id: number


    @Column({
        name: 'created',
        type: 'varchar',
        length: 512
    })
    created: string


    @Column({
        name: 'updated',
        type: 'varchar',
        length: 512
    })
    updated: string

    @Column({
        name: 'valid',
        type: 'tinyint',
        comment: "是否生效",
        default: eValid.Valid
    })
    valid: eValid




    @CreateDateColumn({
        name: 'create_time',
    })
    createTime: Date

    @UpdateDateColumn({
        name: 'update_time',
    })
    updateTime: Date

}