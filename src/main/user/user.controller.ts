import { Controller, Get, Inject } from "@midwayjs/core";
import { UserService } from "./user.service";

@Controller('/')
export class UserController {

    @Inject()
    userService: UserService


    @Get('/test')
    async test() {
        return { a: 1 }
    }
}