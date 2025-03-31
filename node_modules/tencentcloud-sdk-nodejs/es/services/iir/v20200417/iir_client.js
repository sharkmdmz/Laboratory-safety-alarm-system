import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("iir.tencentcloudapi.com", "2020-04-17", clientConfig);
    }
    async RecognizeProduct(req, cb) {
        return this.request("RecognizeProduct", req, cb);
    }
}
