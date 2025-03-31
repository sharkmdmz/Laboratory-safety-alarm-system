import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("goosefs.tencentcloudapi.com", "2022-05-19", clientConfig);
    }
    async DescribeClusterRoles(req, cb) {
        return this.request("DescribeClusterRoles", req, cb);
    }
    async DeleteFileSystem(req, cb) {
        return this.request("DeleteFileSystem", req, cb);
    }
    async AddCrossVpcSubnetSupportForClientNode(req, cb) {
        return this.request("AddCrossVpcSubnetSupportForClientNode", req, cb);
    }
    async BatchAddClientNodes(req, cb) {
        return this.request("BatchAddClientNodes", req, cb);
    }
    async DetachFileSystemBucket(req, cb) {
        return this.request("DetachFileSystemBucket", req, cb);
    }
    async DescribeFileSystems(req, cb) {
        return this.request("DescribeFileSystems", req, cb);
    }
    async QueryDataRepositoryBandwidth(req, cb) {
        return this.request("QueryDataRepositoryBandwidth", req, cb);
    }
    async DescribeFileSystemBuckets(req, cb) {
        return this.request("DescribeFileSystemBuckets", req, cb);
    }
    async DescribeClientNodes(req, cb) {
        return this.request("DescribeClientNodes", req, cb);
    }
    async DescribeDataRepositoryTaskStatus(req, cb) {
        return this.request("DescribeDataRepositoryTaskStatus", req, cb);
    }
    async DeleteCrossVpcSubnetSupportForClientNode(req, cb) {
        return this.request("DeleteCrossVpcSubnetSupportForClientNode", req, cb);
    }
    async ModifyDataRepositoryBandwidth(req, cb) {
        return this.request("ModifyDataRepositoryBandwidth", req, cb);
    }
    async AttachFileSystemBucket(req, cb) {
        return this.request("AttachFileSystemBucket", req, cb);
    }
    async BatchDeleteClientNodes(req, cb) {
        return this.request("BatchDeleteClientNodes", req, cb);
    }
    async QueryCrossVpcSubnetSupportForClientNode(req, cb) {
        return this.request("QueryCrossVpcSubnetSupportForClientNode", req, cb);
    }
    async DescribeClusterClientToken(req, cb) {
        return this.request("DescribeClusterClientToken", req, cb);
    }
    async CreateFileSystem(req, cb) {
        return this.request("CreateFileSystem", req, cb);
    }
    async ExpandCapacity(req, cb) {
        return this.request("ExpandCapacity", req, cb);
    }
    async DescribeClusterRoleToken(req, cb) {
        return this.request("DescribeClusterRoleToken", req, cb);
    }
    async CreateDataRepositoryTask(req, cb) {
        return this.request("CreateDataRepositoryTask", req, cb);
    }
}
