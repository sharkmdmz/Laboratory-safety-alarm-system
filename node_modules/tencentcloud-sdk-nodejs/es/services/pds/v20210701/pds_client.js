import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("pds.tencentcloudapi.com", "2021-07-01", clientConfig);
    }
    async DescribeStockEstimation(req, cb) {
        return this.request("DescribeStockEstimation", req, cb);
    }
    async DescribeNewUserAcquisition(req, cb) {
        return this.request("DescribeNewUserAcquisition", req, cb);
    }
}
