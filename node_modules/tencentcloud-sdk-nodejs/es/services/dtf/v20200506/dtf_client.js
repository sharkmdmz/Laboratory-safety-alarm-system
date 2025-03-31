import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("dtf.tencentcloudapi.com", "2020-05-06", clientConfig);
    }
    async DescribeTransactions(req, cb) {
        return this.request("DescribeTransactions", req, cb);
    }
}
