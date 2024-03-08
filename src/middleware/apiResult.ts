import { IMiddleware, Middleware } from "@midwayjs/core";
import { Context, NextFunction } from "@midwayjs/koa";
const apiReg = /^\/([^/]+\/)?api\//i;

@Middleware()
export class ApiResultMiddleware implements IMiddleware<Context, NextFunction> {
  ignore(ctx: Context): boolean {
    // 下面的路由将忽略此中间件
    return ctx.path === "/" || /^\/([^/]+\/)?api\/cos\/get/.test(ctx.path);
  }

  resolve() {
    console.log("???")
    return async (ctx: Context, next: NextFunction) => {
      const isApi = apiReg.test(ctx.request.path);
      if (isApi) {
        const result = await next();
        return Object.assign(
          { ret: 0, msg: "success", data: null },
          typeof result?.ret === "number" ? result : { data: result }
        );
      } else {
        return next();
      }
    };
  }
}
