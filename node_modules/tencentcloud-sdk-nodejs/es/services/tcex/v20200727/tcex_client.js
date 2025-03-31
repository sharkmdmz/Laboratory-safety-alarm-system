import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("tcex.tencentcloudapi.com", "2020-07-27", clientConfig);
    }
    async DescribeInvocationResult(req, cb) {
        return this.request("DescribeInvocationResult", req, cb);
    }
    async InvokeService(req, cb) {
        return this.request("InvokeService", req, cb);
    }
}
