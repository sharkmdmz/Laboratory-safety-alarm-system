import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("tic.tencentcloudapi.com", "2020-11-17", clientConfig);
    }
    async DescribeStackEvents(req, cb) {
        return this.request("DescribeStackEvents", req, cb);
    }
    async UpdateStack(req, cb) {
        return this.request("UpdateStack", req, cb);
    }
    async UpdateStackVersion(req, cb) {
        return this.request("UpdateStackVersion", req, cb);
    }
    async DestroyStack(req, cb) {
        return this.request("DestroyStack", req, cb);
    }
    async ApplyStack(req, cb) {
        return this.request("ApplyStack", req, cb);
    }
    async CreateStackVersion(req, cb) {
        return this.request("CreateStackVersion", req, cb);
    }
    async DeleteStack(req, cb) {
        return this.request("DeleteStack", req, cb);
    }
    async PlanStack(req, cb) {
        return this.request("PlanStack", req, cb);
    }
    async DeleteStackVersion(req, cb) {
        return this.request("DeleteStackVersion", req, cb);
    }
    async DescribeStackEvent(req, cb) {
        return this.request("DescribeStackEvent", req, cb);
    }
    async DescribeStackVersions(req, cb) {
        return this.request("DescribeStackVersions", req, cb);
    }
    async DescribeStacks(req, cb) {
        return this.request("DescribeStacks", req, cb);
    }
    async CreateStack(req, cb) {
        return this.request("CreateStack", req, cb);
    }
}
