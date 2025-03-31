import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("trdp.tencentcloudapi.com", "2022-07-26", clientConfig);
    }
    async EvaluateUserRisk(req, cb) {
        return this.request("EvaluateUserRisk", req, cb);
    }
}
