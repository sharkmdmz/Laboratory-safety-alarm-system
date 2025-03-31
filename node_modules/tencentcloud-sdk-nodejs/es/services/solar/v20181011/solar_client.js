import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("solar.tencentcloudapi.com", "2018-10-11", clientConfig);
    }
    async DescribeSubProject(req, cb) {
        return this.request("DescribeSubProject", req, cb);
    }
    async DescribeProjectStock(req, cb) {
        return this.request("DescribeProjectStock", req, cb);
    }
    async DescribeProject(req, cb) {
        return this.request("DescribeProject", req, cb);
    }
    async DescribeResourceTemplateHeaders(req, cb) {
        return this.request("DescribeResourceTemplateHeaders", req, cb);
    }
    async DescribeCustomers(req, cb) {
        return this.request("DescribeCustomers", req, cb);
    }
    async SendWxTouchTask(req, cb) {
        return this.request("SendWxTouchTask", req, cb);
    }
    async CreateProject(req, cb) {
        return this.request("CreateProject", req, cb);
    }
    async ReplenishProjectStock(req, cb) {
        return this.request("ReplenishProjectStock", req, cb);
    }
    async DescribeProjects(req, cb) {
        return this.request("DescribeProjects", req, cb);
    }
    async OffLineProject(req, cb) {
        return this.request("OffLineProject", req, cb);
    }
    async ExpireFlow(req, cb) {
        return this.request("ExpireFlow", req, cb);
    }
    async DeleteProject(req, cb) {
        return this.request("DeleteProject", req, cb);
    }
    async CheckStaffChUser(req, cb) {
        return this.request("CheckStaffChUser", req, cb);
    }
    async DescribeCustomer(req, cb) {
        return this.request("DescribeCustomer", req, cb);
    }
    async ModifyProject(req, cb) {
        return this.request("ModifyProject", req, cb);
    }
    async CreateSubProject(req, cb) {
        return this.request("CreateSubProject", req, cb);
    }
    async CopyActivityChannel(req, cb) {
        return this.request("CopyActivityChannel", req, cb);
    }
}
