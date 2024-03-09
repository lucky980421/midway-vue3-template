import { Configuration, App, Inject } from "@midwayjs/core";
import * as koa from "@midwayjs/koa";
import * as validate from "@midwayjs/validate";
import * as info from "@midwayjs/info";
import * as axios from "@midwayjs/axios";
import * as swagger from "@midwayjs/swagger";
import { join } from "path";
// import { DefaultErrorFilter } from './filter/default.filter';
// import { NotFoundFilter } from './filter/notfound.filter';
import * as view from "@midwayjs/view-nunjucks";
import * as staticFile from "@midwayjs/static-file";
import devopsConfig from "./config/devops.config";
import { ApiResultMiddleware } from "./middleware/apiResult";
// import * as orm from '@midwayjs/typeorm';
import * as jwt from '@midwayjs/jwt';
import * as captcha from '@midwayjs/captcha';

@Configuration({
  imports: [
    koa,
    validate,
    {
      component: info,
      enabledEnvironment: ["local"],
    },
    view,
    staticFile,
    axios,
    swagger,
    // orm,
    jwt,
    captcha
  ],
  importConfigs: [join(__dirname, "./config")],
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application;

  @Inject()
  framework: koa.Framework;

  async onConfigLoad() {

  }

  async onReady() {
    // add middleware
    this.app.useMiddleware([ApiResultMiddleware]);

    // add filter
    // this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
  }

  async onServerReady() {
    if (process.env.NODE_ENV !== "production") {
      console.log(
        `请访问 http://${process.env.IP || "127.0.0.1"}:${process.env.PORT || 7001
        }${devopsConfig.prefixUrl}/`
      );
    }
  }
}
