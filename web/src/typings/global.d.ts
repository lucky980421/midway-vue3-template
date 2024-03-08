declare let window: Window & typeof globalThis;
declare let EASY_ENV_IS_NODE: boolean;
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface UserInfo {
  name?: string;
  alias?: string;
  email?: string;
  order?: number[];
  avatar?: string;
  enable?: number;
  errmsg?: string;
  gender?: string;
  mobile?: string;
  qrCode?: string;
  status: number;
  userId?: string;
  userid?: string;
  address?: string;
  errcode?: number;
  uniqueId?: string;
  extattr: {
    // 座位等信息
    attrs: any[];
  };
  qr_code?: string;
  staffId: number;
  isleader: number;
  position?: string;
  companyId: number;
  telephone?: string;
  department: number[];
  createdDate?: string;
  hide_mobile?: number;
  updatedDate?: string;
  thumb_avatar?: string;
  main_department: number;
  external_profile?: {
    external_attr: any[];
    external_corp_name: string;
  };
  is_leader_in_dept?: any[];
  consultInformation?: any;
  companyCode: string;
}
interface Window {
  __INITIAL_STATE__: {
    config: {
      prefix?: string;
      adapter?: string;
      title?: string;
      requestHost?: any;
      permissionConfig?: {
        open: boolean;
        permissionSystemOrigin?: string;
        roleIdWhiteList?: number[];
        uniqueIdWhiteList?: string[];
        requirePermissionPaths?: string[];
        applyPermissionUrl?: string;
      };
    };
    jvCommon: {
      env: string;
      jvAppId: number;
    };

    loginUser: UserInfo;

    jvSessionToken: string;
  };
}

export interface TxT2ImgRequestParams {
  /**
   *  提示词
   */
  prompt?: string;
  /**
   *  反向提示词
   */
  negative_prompt?: string;
  /**
   *  步长
   */
  steps?: number;
  /**
   *  生成图片宽度
   */
  width?: number;
  /**
   *  生成图片高度
   */
  height?: number;
  /**
   *  保存图片
   */
  save_images?: boolean;
  /**
   *  ControlNet
   */
  controlNet?: {
    name: string;
    image: string;
    weight: number;
  };
  /**
   *  主体预设
   */
  presetting?: string;
}
