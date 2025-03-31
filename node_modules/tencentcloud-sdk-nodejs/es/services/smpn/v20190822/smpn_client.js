import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("smpn.tencentcloudapi.com", "2019-08-22", clientConfig);
    }
    async DescribeSmpnFnr(req, cb) {
        return this.request("DescribeSmpnFnr", req, cb);
    }
    async DescribeSmpnChp(req, cb) {
        return this.request("DescribeSmpnChp", req, cb);
    }
}
