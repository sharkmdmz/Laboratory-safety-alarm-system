import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("vclm.tencentcloudapi.com", "2024-05-23", clientConfig);
    }
    async SubmitVideoStylizationJob(req, cb) {
        return this.request("SubmitVideoStylizationJob", req, cb);
    }
    async SubmitPortraitSingJob(req, cb) {
        return this.request("SubmitPortraitSingJob", req, cb);
    }
    async DescribePortraitSingJob(req, cb) {
        return this.request("DescribePortraitSingJob", req, cb);
    }
    async DescribeImageAnimateJob(req, cb) {
        return this.request("DescribeImageAnimateJob", req, cb);
    }
    async SubmitImageAnimateJob(req, cb) {
        return this.request("SubmitImageAnimateJob", req, cb);
    }
    async CheckAnimateImageJob(req, cb) {
        return this.request("CheckAnimateImageJob", req, cb);
    }
    async DescribeVideoStylizationJob(req, cb) {
        return this.request("DescribeVideoStylizationJob", req, cb);
    }
}
