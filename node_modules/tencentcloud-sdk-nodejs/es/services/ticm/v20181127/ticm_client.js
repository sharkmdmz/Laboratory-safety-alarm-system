import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("ticm.tencentcloudapi.com", "2018-11-27", clientConfig);
    }
    async ImageModeration(req, cb) {
        return this.request("ImageModeration", req, cb);
    }
    async VideoModeration(req, cb) {
        return this.request("VideoModeration", req, cb);
    }
    async DescribeVideoTask(req, cb) {
        return this.request("DescribeVideoTask", req, cb);
    }
}
