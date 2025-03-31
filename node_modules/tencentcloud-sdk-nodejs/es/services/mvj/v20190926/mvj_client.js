import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("mvj.tencentcloudapi.com", "2019-09-26", clientConfig);
    }
    async MarketingValueJudgement(req, cb) {
        return this.request("MarketingValueJudgement", req, cb);
    }
}
