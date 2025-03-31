import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("tms.tencentcloudapi.com", "2020-12-29", clientConfig);
    }
    async TextModeration(req, cb) {
        return this.request("TextModeration", req, cb);
    }
}
