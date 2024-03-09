import devopsConfig from "../config/devops.config";
import { Body, Controller, Get, Inject, Post, Provide } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { LoginDTO } from "./user/user.dto";
import { UserService } from "./user/user.service";
import { CaptchaService } from "@midwayjs/captcha";
@Provide()
@Controller('/')
export class HomeController {

    @Inject()
    ctx: Context;

    @Inject()
    userService: UserService

    @Inject()
    captchaService: CaptchaService;

    @Get('/*')
    async home() {
        return this.defaultTemplate()
    }
    @Get('/')
    async home1() {
        return this.defaultTemplate()
    }


    defaultTemplate() {
        const viteTarget = process.env.VITE_PORT;
        const config = this.ctx.app.getConfig();
        return this.ctx.render('index.html', {
            data: {
                config: {
                    prefix: config.koa.globalPrefix,
                },
                userInfo: this.ctx.userInfo || {}
            },
            title: devopsConfig.siteTitle,
            viteTarget: viteTarget ? `http://127.0.0.1:${viteTarget}` : '',
        });
    }


    @Post('/api/login')
    async login(@Body() data: LoginDTO) {
        return this.userService.login(data)
    }

    @Get('/api/get-image-captcha')
    async getImageCaptcha() {
        const { id, imageBase64 } = await this.captchaService.image({ width: 120, height: 40 });
        return {
            id,          // 验证码 id
            imageBase64, // 验证码 SVG 图片的 base64 数据，可以直接放入前端的 img 标签内
        }
    }
}

