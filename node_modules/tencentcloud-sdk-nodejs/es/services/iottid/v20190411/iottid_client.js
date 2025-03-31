import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("iottid.tencentcloudapi.com", "2019-04-11", clientConfig);
    }
    async AuthTestTid(req, cb) {
        return this.request("AuthTestTid", req, cb);
    }
    async UploadDeviceUniqueCode(req, cb) {
        return this.request("UploadDeviceUniqueCode", req, cb);
    }
    async VerifyChipBurnInfo(req, cb) {
        return this.request("VerifyChipBurnInfo", req, cb);
    }
    async DeliverTids(req, cb) {
        return this.request("DeliverTids", req, cb);
    }
    async BurnTidNotify(req, cb) {
        return this.request("BurnTidNotify", req, cb);
    }
    async DescribePermission(req, cb) {
        return this.request("DescribePermission", req, cb);
    }
    async DeliverTidNotify(req, cb) {
        return this.request("DeliverTidNotify", req, cb);
    }
    async DownloadTids(req, cb) {
        return this.request("DownloadTids", req, cb);
    }
    async DescribeAvailableLibCount(req, cb) {
        return this.request("DescribeAvailableLibCount", req, cb);
    }
}
