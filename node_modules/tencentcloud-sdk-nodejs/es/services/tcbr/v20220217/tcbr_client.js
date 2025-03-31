import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("tcbr.tencentcloudapi.com", "2022-02-17", clientConfig);
    }
    async CreateCloudRunServer(req, cb) {
        return this.request("CreateCloudRunServer", req, cb);
    }
    async DescribeServerManageTask(req, cb) {
        return this.request("DescribeServerManageTask", req, cb);
    }
    async DescribeEnvBaseInfo(req, cb) {
        return this.request("DescribeEnvBaseInfo", req, cb);
    }
    async DescribeCloudRunServers(req, cb) {
        return this.request("DescribeCloudRunServers", req, cb);
    }
    async ReleaseGray(req, cb) {
        return this.request("ReleaseGray", req, cb);
    }
    async UpdateCloudRunServer(req, cb) {
        return this.request("UpdateCloudRunServer", req, cb);
    }
    async CreateCloudRunEnv(req, cb) {
        return this.request("CreateCloudRunEnv", req, cb);
    }
    async DescribeCloudRunEnvs(req, cb) {
        return this.request("DescribeCloudRunEnvs", req, cb);
    }
    async OperateServerManage(req, cb) {
        return this.request("OperateServerManage", req, cb);
    }
    async DescribeCloudRunServerDetail(req, cb) {
        return this.request("DescribeCloudRunServerDetail", req, cb);
    }
}
