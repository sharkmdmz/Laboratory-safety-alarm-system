import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("vod.tencentcloudapi.com", "2024-07-18", clientConfig);
    }
    async CreateStorageCredentials(req, cb) {
        return this.request("CreateStorageCredentials", req, cb);
    }
}
