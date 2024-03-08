import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../base/entity.base";


@Entity('t_user')
export class User extends BaseEntity {

    @Column({
        name: 'nick_name',
        type: 'varchar',
        length: 512
    })
    nickName: string

    @Column({
        name: 'phone_number',
        type: 'varchar',
        length: 11
    })
    phoneNumber: string
}