import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("tav.tencentcloudapi.com", "2019-01-18", clientConfig);
    }
    async GetScanResult(req, cb) {
        return this.request("GetScanResult", req, cb);
    }
    async ScanFileHash(req, cb) {
        return this.request("ScanFileHash", req, cb);
    }
    async GetLocalEngine(req, cb) {
        return this.request("GetLocalEngine", req, cb);
    }
    async ScanFile(req, cb) {
        return this.request("ScanFile", req, cb);
    }
}
