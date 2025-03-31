import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("privatedns.tencentcloudapi.com", "2020-10-28", clientConfig);
    }
    async CreatePrivateDNSAccount(req, cb) {
        return this.request("CreatePrivateDNSAccount", req, cb);
    }
    async DescribePrivateZone(req, cb) {
        return this.request("DescribePrivateZone", req, cb);
    }
    async DescribePrivateZoneRecordList(req, cb) {
        return this.request("DescribePrivateZoneRecordList", req, cb);
    }
    async DescribeQuotaUsage(req, cb) {
        return this.request("DescribeQuotaUsage", req, cb);
    }
    async DescribeAuditLog(req, cb) {
        return this.request("DescribeAuditLog", req, cb);
    }
    async CreatePrivateZoneRecord(req, cb) {
        return this.request("CreatePrivateZoneRecord", req, cb);
    }
    async CreatePrivateZone(req, cb) {
        return this.request("CreatePrivateZone", req, cb);
    }
    async DescribePrivateZoneList(req, cb) {
        return this.request("DescribePrivateZoneList", req, cb);
    }
    async AddSpecifyPrivateZoneVpc(req, cb) {
        return this.request("AddSpecifyPrivateZoneVpc", req, cb);
    }
    async QueryAsyncBindVpcStatus(req, cb) {
        return this.request("QueryAsyncBindVpcStatus", req, cb);
    }
    async ModifyPrivateZone(req, cb) {
        return this.request("ModifyPrivateZone", req, cb);
    }
    async ModifyPrivateZoneRecord(req, cb) {
        return this.request("ModifyPrivateZoneRecord", req, cb);
    }
    async DeletePrivateDNSAccount(req, cb) {
        return this.request("DeletePrivateDNSAccount", req, cb);
    }
    async SubscribePrivateZoneService(req, cb) {
        return this.request("SubscribePrivateZoneService", req, cb);
    }
    async DescribeDashboard(req, cb) {
        return this.request("DescribeDashboard", req, cb);
    }
    async ModifyPrivateZoneVpc(req, cb) {
        return this.request("ModifyPrivateZoneVpc", req, cb);
    }
    async DeletePrivateZone(req, cb) {
        return this.request("DeletePrivateZone", req, cb);
    }
    async DescribeAccountVpcList(req, cb) {
        return this.request("DescribeAccountVpcList", req, cb);
    }
    async ModifyRecordsStatus(req, cb) {
        return this.request("ModifyRecordsStatus", req, cb);
    }
    async DeleteSpecifyPrivateZoneVpc(req, cb) {
        return this.request("DeleteSpecifyPrivateZoneVpc", req, cb);
    }
    async DescribePrivateZoneService(req, cb) {
        return this.request("DescribePrivateZoneService", req, cb);
    }
    async DeletePrivateZoneRecord(req, cb) {
        return this.request("DeletePrivateZoneRecord", req, cb);
    }
    async DescribeRequestData(req, cb) {
        return this.request("DescribeRequestData", req, cb);
    }
    async DescribePrivateDNSAccountList(req, cb) {
        return this.request("DescribePrivateDNSAccountList", req, cb);
    }
}
