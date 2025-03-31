import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("apcas.tencentcloudapi.com", "2020-11-27", clientConfig);
    }
    async QueryGeneralStat(req, cb) {
        return this.request("QueryGeneralStat", req, cb);
    }
    async GetTaskList(req, cb) {
        return this.request("GetTaskList", req, cb);
    }
    async QueryCallStat(req, cb) {
        return this.request("QueryCallStat", req, cb);
    }
    async UploadId(req, cb) {
        return this.request("UploadId", req, cb);
    }
    async GetTaskDetail(req, cb) {
        return this.request("GetTaskDetail", req, cb);
    }
    async QueryCallDetails(req, cb) {
        return this.request("QueryCallDetails", req, cb);
    }
    async PredictRating(req, cb) {
        return this.request("PredictRating", req, cb);
    }
}
