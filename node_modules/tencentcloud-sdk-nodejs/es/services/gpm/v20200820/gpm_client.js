import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("gpm.tencentcloudapi.com", "2020-08-20", clientConfig);
    }
    async CancelMatching(req, cb) {
        return this.request("CancelMatching", req, cb);
    }
    async ModifyToken(req, cb) {
        return this.request("ModifyToken", req, cb);
    }
    async DescribeMatchingProgress(req, cb) {
        return this.request("DescribeMatchingProgress", req, cb);
    }
    async CreateMatch(req, cb) {
        return this.request("CreateMatch", req, cb);
    }
    async ModifyMatch(req, cb) {
        return this.request("ModifyMatch", req, cb);
    }
    async DescribeToken(req, cb) {
        return this.request("DescribeToken", req, cb);
    }
    async DescribeRule(req, cb) {
        return this.request("DescribeRule", req, cb);
    }
    async StartMatchingBackfill(req, cb) {
        return this.request("StartMatchingBackfill", req, cb);
    }
    async DescribeMatch(req, cb) {
        return this.request("DescribeMatch", req, cb);
    }
    async DeleteRule(req, cb) {
        return this.request("DeleteRule", req, cb);
    }
    async DeleteMatch(req, cb) {
        return this.request("DeleteMatch", req, cb);
    }
    async DescribeRules(req, cb) {
        return this.request("DescribeRules", req, cb);
    }
    async ModifyRule(req, cb) {
        return this.request("ModifyRule", req, cb);
    }
    async CreateRule(req, cb) {
        return this.request("CreateRule", req, cb);
    }
    async StartMatching(req, cb) {
        return this.request("StartMatching", req, cb);
    }
    async DescribeMatches(req, cb) {
        return this.request("DescribeMatches", req, cb);
    }
    async DescribeMatchCodes(req, cb) {
        return this.request("DescribeMatchCodes", req, cb);
    }
    async DescribeData(req, cb) {
        return this.request("DescribeData", req, cb);
    }
}
