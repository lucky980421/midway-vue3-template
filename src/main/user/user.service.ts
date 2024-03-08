import { Inject, Provide } from "@midwayjs/core";
// import { BaseService } from "../../base/service.base";
import { LoginDTO } from "./user.dto";
// import { User } from "./user.entity";
import { JwtService } from "@midwayjs/jwt";


@Provide()
export class UserService {

    @Inject()
    jwtService: JwtService;


    async login(data: LoginDTO) {

        // const user = await this.repository.findOneBy({ valid: 1 })


        // const token = this.jwtService.signSync({ user })
        // this.ctx.cookies.set('_token', token, { signed: true })
        // return user;
        return data
    }
}