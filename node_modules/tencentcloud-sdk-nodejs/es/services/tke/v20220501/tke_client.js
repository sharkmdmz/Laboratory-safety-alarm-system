import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("tke.tencentcloudapi.com", "2022-05-01", clientConfig);
    }
    async DescribeNodePools(req, cb) {
        return this.request("DescribeNodePools", req, cb);
    }
    async ModifyNodePool(req, cb) {
        return this.request("ModifyNodePool", req, cb);
    }
    async RebootMachines(req, cb) {
        return this.request("RebootMachines", req, cb);
    }
    async DeleteHealthCheckPolicy(req, cb) {
        return this.request("DeleteHealthCheckPolicy", req, cb);
    }
    async DeleteNodePool(req, cb) {
        return this.request("DeleteNodePool", req, cb);
    }
    async DescribeHealthCheckPolicies(req, cb) {
        return this.request("DescribeHealthCheckPolicies", req, cb);
    }
    async ModifyHealthCheckPolicy(req, cb) {
        return this.request("ModifyHealthCheckPolicy", req, cb);
    }
    async StopMachines(req, cb) {
        return this.request("StopMachines", req, cb);
    }
    async CreateNodePool(req, cb) {
        return this.request("CreateNodePool", req, cb);
    }
    async DescribeHealthCheckTemplate(req, cb) {
        return this.request("DescribeHealthCheckTemplate", req, cb);
    }
    async DescribeHealthCheckPolicyBindings(req, cb) {
        return this.request("DescribeHealthCheckPolicyBindings", req, cb);
    }
    async CreateHealthCheckPolicy(req, cb) {
        return this.request("CreateHealthCheckPolicy", req, cb);
    }
    async StartMachines(req, cb) {
        return this.request("StartMachines", req, cb);
    }
    async DescribeClusterInstances(req, cb) {
        return this.request("DescribeClusterInstances", req, cb);
    }
}
