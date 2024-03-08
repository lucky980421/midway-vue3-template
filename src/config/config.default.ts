import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';
import * as path from 'path';
import devopsConfig from './devops.config';
export default (appInfo: MidwayAppInfo) => {
  const config = {} as MidwayConfig

  config.keys = appInfo.name + '_1922773278643_4235'
  config.koa = {
    globalPrefix: `${devopsConfig.prefixUrl}`,
    port: Number(process.env.PORT) || 7001,
    hostname: process.env.IP || '127.0.0.1',
  }

  config.view = {
    //默认view目录
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  }

  config.staticFile = {
    dirs: {
      default: {
        prefix: `${devopsConfig.prefixUrl}/public`,
        // 默认public目录
        dir: path.join(__dirname, '../public'),
      },
    },
  }

  config.info = {
    infoPath: '/_sys_info',
  }

  config.axios = {
    default: {
      // 所有实例复用的配置
    },
    clients: {
      // 默认实例的配置
      default: {
        // `headers` are custom headers to be sent
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
        timeout: 300000, // default is `0` (no timeout)

        // `withCredentials` indicates whether or not cross-site Access-Control requests
        // should be made using credentials
        withCredentials: false, // default
      },
    },
  }
  config.bodyParser = {
    formLimit: '30mb',
    jsonLimit: '30mb',
  }

  config.typeorm = {
    default: {
      type: 'mysql',
      host: '127.0.0.1',
      username: 'root',
      password: '12345678',
      database: 'db_test',
      synchronize: false,
      // 或者扫描形式
      entities: [
        '**/main/*.entity{.ts,.js}'
      ]
    }
  }

  config.jwt = {
    secret: 'fhjhskjdhfererw',
    sign: {
      expiresIn: '1d'
    }
  }

  return config;
};
