import { Inject } from "@midwayjs/core";
import { Context } from "@midwayjs/koa";
import { InjectDataSource } from "@midwayjs/typeorm";
import { DataSource, Repository } from "typeorm";


export class BaseService<T> {
    @Inject()
    ctx: Context

    @InjectDataSource()
    dataSource: DataSource;

    @Inject()
    protected repository: Repository<T>


    async update(data: T) {
        return this.repository.save(data)
    }

    async insert(data: Partial<T> | Partial<T>[]): Promise<T | T[]> {

        let datas = Array.isArray(data) ? data : [data]
        const result = []
        for (let i = 0; i < datas.length; i++) {
            const newData: any = { ...datas[i] }
            newData.createTime = new Date();
            newData.updateTime = new Date();
            result.push(await this.repository.save(newData))
        }
        return result;
    }



}