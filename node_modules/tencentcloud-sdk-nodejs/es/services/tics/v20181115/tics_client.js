import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("tics.tencentcloudapi.com", "2018-11-15", clientConfig);
    }
    async DescribeFileInfo(req, cb) {
        return this.request("DescribeFileInfo", req, cb);
    }
    async DescribeIpInfo(req, cb) {
        return this.request("DescribeIpInfo", req, cb);
    }
    async DescribeDomainInfo(req, cb) {
        return this.request("DescribeDomainInfo", req, cb);
    }
    async DescribeThreatInfo(req, cb) {
        return this.request("DescribeThreatInfo", req, cb);
    }
}
