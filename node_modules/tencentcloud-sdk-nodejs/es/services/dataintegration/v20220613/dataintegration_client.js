import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("dataintegration.tencentcloudapi.com", "2022-06-13", clientConfig);
    }
    async SendMessage(req, cb) {
        return this.request("SendMessage", req, cb);
    }
}
