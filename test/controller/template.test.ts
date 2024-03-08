import { createApp, close, createHttpRequest } from "@midwayjs/mock";
import { Framework } from "@midwayjs/koa";

describe("test/controller/template.test.ts", () => {
  it("should GET /", async () => {
    // create app
    const app = await createApp<Framework>();

    // make request
    const result = await createHttpRequest(app).get("/");

    // close app
    await close(app);
  });
});
