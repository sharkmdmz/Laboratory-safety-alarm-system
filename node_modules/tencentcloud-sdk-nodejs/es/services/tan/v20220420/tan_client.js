import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("tan.tencentcloudapi.com", "2022-04-20", clientConfig);
    }
    async CreateBlockNodeRecords(req, cb) {
        return this.request("CreateBlockNodeRecords", req, cb);
    }
}
