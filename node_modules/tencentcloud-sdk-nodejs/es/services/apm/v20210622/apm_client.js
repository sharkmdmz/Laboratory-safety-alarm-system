import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("apm.tencentcloudapi.com", "2021-06-22", clientConfig);
    }
    async DescribeGeneralApmApplicationConfig(req, cb) {
        return this.request("DescribeGeneralApmApplicationConfig", req, cb);
    }
    async DescribeTagValues(req, cb) {
        return this.request("DescribeTagValues", req, cb);
    }
    async DescribeGeneralSpanList(req, cb) {
        return this.request("DescribeGeneralSpanList", req, cb);
    }
    async DescribeApmInstances(req, cb) {
        return this.request("DescribeApmInstances", req, cb);
    }
    async DescribeApmAgent(req, cb) {
        return this.request("DescribeApmAgent", req, cb);
    }
    async DescribeGeneralOTSpanList(req, cb) {
        return this.request("DescribeGeneralOTSpanList", req, cb);
    }
    async ModifyApmInstance(req, cb) {
        return this.request("ModifyApmInstance", req, cb);
    }
    async ModifyGeneralApmApplicationConfig(req, cb) {
        return this.request("ModifyGeneralApmApplicationConfig", req, cb);
    }
    async DescribeGeneralMetricData(req, cb) {
        return this.request("DescribeGeneralMetricData", req, cb);
    }
    async DescribeMetricRecords(req, cb) {
        return this.request("DescribeMetricRecords", req, cb);
    }
    async TerminateApmInstance(req, cb) {
        return this.request("TerminateApmInstance", req, cb);
    }
    async CreateApmInstance(req, cb) {
        return this.request("CreateApmInstance", req, cb);
    }
    async DescribeServiceOverview(req, cb) {
        return this.request("DescribeServiceOverview", req, cb);
    }
}
