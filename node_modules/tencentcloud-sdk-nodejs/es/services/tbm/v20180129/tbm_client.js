import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("tbm.tencentcloudapi.com", "2018-01-29", clientConfig);
    }
    async DescribeUserPortrait(req, cb) {
        return this.request("DescribeUserPortrait", req, cb);
    }
    async DescribeBrandPosComments(req, cb) {
        return this.request("DescribeBrandPosComments", req, cb);
    }
    async DescribeIndustryNews(req, cb) {
        return this.request("DescribeIndustryNews", req, cb);
    }
    async DescribeBrandMediaReport(req, cb) {
        return this.request("DescribeBrandMediaReport", req, cb);
    }
    async DescribeBrandNegComments(req, cb) {
        return this.request("DescribeBrandNegComments", req, cb);
    }
    async DescribeBrandSocialReport(req, cb) {
        return this.request("DescribeBrandSocialReport", req, cb);
    }
    async DescribeBrandSocialOpinion(req, cb) {
        return this.request("DescribeBrandSocialOpinion", req, cb);
    }
    async DescribeBrandCommentCount(req, cb) {
        return this.request("DescribeBrandCommentCount", req, cb);
    }
    async DescribeBrandExposure(req, cb) {
        return this.request("DescribeBrandExposure", req, cb);
    }
}
