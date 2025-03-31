import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("mgobe.tencentcloudapi.com", "2019-09-29", clientConfig);
    }
    async DismissRoom(req, cb) {
        return this.request("DismissRoom", req, cb);
    }
}
