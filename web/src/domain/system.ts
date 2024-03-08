import { Entity } from "@/base/entity";

interface SystemState {
    /**
     *  用户信息
     */
    userInfo: Record<string, any>
}

class SystemDomain extends Entity<SystemState> {
    get userInfo() {
        return this.state.userInfo
    }
}

// @ts-ignore
export const systemConfig = new SystemDomain(window.__INITIAL_STATE__);