import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("tiems.tencentcloudapi.com", "2019-04-16", clientConfig);
    }
    async CreateService(req, cb) {
        return this.request("CreateService", req, cb);
    }
    async CreateServiceConfig(req, cb) {
        return this.request("CreateServiceConfig", req, cb);
    }
    async CreateRsgAsGroup(req, cb) {
        return this.request("CreateRsgAsGroup", req, cb);
    }
    async DeleteInstance(req, cb) {
        return this.request("DeleteInstance", req, cb);
    }
    async DeleteService(req, cb) {
        return this.request("DeleteService", req, cb);
    }
    async CreateJob(req, cb) {
        return this.request("CreateJob", req, cb);
    }
    async UpdateRsgAsGroup(req, cb) {
        return this.request("UpdateRsgAsGroup", req, cb);
    }
    async DescribeServices(req, cb) {
        return this.request("DescribeServices", req, cb);
    }
    async DisableRsgAsGroup(req, cb) {
        return this.request("DisableRsgAsGroup", req, cb);
    }
    async UpdateService(req, cb) {
        return this.request("UpdateService", req, cb);
    }
    async CreateRuntime(req, cb) {
        return this.request("CreateRuntime", req, cb);
    }
    async DeleteServiceConfig(req, cb) {
        return this.request("DeleteServiceConfig", req, cb);
    }
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    async DescribeRsgAsGroupActivities(req, cb) {
        return this.request("DescribeRsgAsGroupActivities", req, cb);
    }
    async DescribeRuntimes(req, cb) {
        return this.request("DescribeRuntimes", req, cb);
    }
    async DescribeResourceGroups(req, cb) {
        return this.request("DescribeResourceGroups", req, cb);
    }
    async UpdateJob(req, cb) {
        return this.request("UpdateJob", req, cb);
    }
    async DeleteRsgAsGroup(req, cb) {
        return this.request("DeleteRsgAsGroup", req, cb);
    }
    async DeleteResourceGroup(req, cb) {
        return this.request("DeleteResourceGroup", req, cb);
    }
    async DeleteRuntime(req, cb) {
        return this.request("DeleteRuntime", req, cb);
    }
    async ExposeService(req, cb) {
        return this.request("ExposeService", req, cb);
    }
    async DeleteJob(req, cb) {
        return this.request("DeleteJob", req, cb);
    }
    async EnableRsgAsGroup(req, cb) {
        return this.request("EnableRsgAsGroup", req, cb);
    }
    async DescribeServiceConfigs(req, cb) {
        return this.request("DescribeServiceConfigs", req, cb);
    }
    async DescribeRsgAsGroups(req, cb) {
        return this.request("DescribeRsgAsGroups", req, cb);
    }
}
