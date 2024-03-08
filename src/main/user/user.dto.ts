import { Rule, RuleType } from "@midwayjs/validate";


export class LoginDTO {

    @Rule(RuleType.string())
    phoneNumber: string

    @Rule(RuleType.string())
    passWord: string;
}