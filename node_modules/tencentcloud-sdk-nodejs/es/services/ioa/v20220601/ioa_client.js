import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("ioa.tencentcloudapi.com", "2022-06-01", clientConfig);
    }
    async DescribeRootAccountGroup(req, cb) {
        return this.request("DescribeRootAccountGroup", req, cb);
    }
    async DescribeDevices(req, cb) {
        return this.request("DescribeDevices", req, cb);
    }
    async CreateDeviceVirtualGroup(req, cb) {
        return this.request("CreateDeviceVirtualGroup", req, cb);
    }
    async DescribeAccountGroups(req, cb) {
        return this.request("DescribeAccountGroups", req, cb);
    }
    async DescribeLocalAccounts(req, cb) {
        return this.request("DescribeLocalAccounts", req, cb);
    }
}
