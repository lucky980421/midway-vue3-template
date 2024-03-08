// 基础配置
// @ts-ignore
const config = (window.__INITIAL_STATE__ && window.__INITIAL_STATE__.config) || {};
const prefix = config.prefix || '';
export default {
  ...config,
  prefix,
  // api的根URL
  baseURL: `${location.origin}` + prefix,
  timeout: 3e4,
};
