import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("cis.tencentcloudapi.com", "2018-04-08", clientConfig);
    }
    async DescribeContainerInstances(req, cb) {
        return this.request("DescribeContainerInstances", req, cb);
    }
    async CreateContainerInstance(req, cb) {
        return this.request("CreateContainerInstance", req, cb);
    }
    async InquiryPriceCreateCis(req, cb) {
        return this.request("InquiryPriceCreateCis", req, cb);
    }
    async DescribeContainerInstance(req, cb) {
        return this.request("DescribeContainerInstance", req, cb);
    }
    async DescribeContainerInstanceEvents(req, cb) {
        return this.request("DescribeContainerInstanceEvents", req, cb);
    }
    async DeleteContainerInstance(req, cb) {
        return this.request("DeleteContainerInstance", req, cb);
    }
    async DescribeContainerLog(req, cb) {
        return this.request("DescribeContainerLog", req, cb);
    }
}
