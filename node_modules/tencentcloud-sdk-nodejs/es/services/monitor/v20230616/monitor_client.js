import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("monitor.tencentcloudapi.com", "2023-06-16", clientConfig);
    }
    async GetMonitorData(req, cb) {
        return this.request("GetMonitorData", req, cb);
    }
}
