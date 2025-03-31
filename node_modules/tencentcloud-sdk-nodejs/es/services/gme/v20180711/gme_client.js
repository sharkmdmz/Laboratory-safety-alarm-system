import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("gme.tencentcloudapi.com", "2018-07-11", clientConfig);
    }
    async DescribeRoomInfo(req, cb) {
        return this.request("DescribeRoomInfo", req, cb);
    }
    async StopRecord(req, cb) {
        return this.request("StopRecord", req, cb);
    }
    async DeleteScanUser(req, cb) {
        return this.request("DeleteScanUser", req, cb);
    }
    async UpdateScanUsers(req, cb) {
        return this.request("UpdateScanUsers", req, cb);
    }
    async GetCustomizationList(req, cb) {
        return this.request("GetCustomizationList", req, cb);
    }
    async DescribeUserInAndOutTime(req, cb) {
        return this.request("DescribeUserInAndOutTime", req, cb);
    }
    async UpdateScanRooms(req, cb) {
        return this.request("UpdateScanRooms", req, cb);
    }
    async CreateCustomization(req, cb) {
        return this.request("CreateCustomization", req, cb);
    }
    async DescribeTaskInfo(req, cb) {
        return this.request("DescribeTaskInfo", req, cb);
    }
    async CreateAgeDetectTask(req, cb) {
        return this.request("CreateAgeDetectTask", req, cb);
    }
    async DeleteRoomMember(req, cb) {
        return this.request("DeleteRoomMember", req, cb);
    }
    async DescribeApplicationData(req, cb) {
        return this.request("DescribeApplicationData", req, cb);
    }
    async ScanVoice(req, cb) {
        return this.request("ScanVoice", req, cb);
    }
    async CreateScanUser(req, cb) {
        return this.request("CreateScanUser", req, cb);
    }
    async DescribeAppStatistics(req, cb) {
        return this.request("DescribeAppStatistics", req, cb);
    }
    async ModifyCustomization(req, cb) {
        return this.request("ModifyCustomization", req, cb);
    }
    async DescribeRealtimeScanConfig(req, cb) {
        return this.request("DescribeRealtimeScanConfig", req, cb);
    }
    async ModifyRecordInfo(req, cb) {
        return this.request("ModifyRecordInfo", req, cb);
    }
    async CreateApp(req, cb) {
        return this.request("CreateApp", req, cb);
    }
    async DescribeScanResultList(req, cb) {
        return this.request("DescribeScanResultList", req, cb);
    }
    async DescribeApplicationList(req, cb) {
        return this.request("DescribeApplicationList", req, cb);
    }
    async ModifyCustomizationState(req, cb) {
        return this.request("ModifyCustomizationState", req, cb);
    }
    async DescribeRecordInfo(req, cb) {
        return this.request("DescribeRecordInfo", req, cb);
    }
    async ModifyUserMicStatus(req, cb) {
        return this.request("ModifyUserMicStatus", req, cb);
    }
    async DeleteCustomization(req, cb) {
        return this.request("DeleteCustomization", req, cb);
    }
    async StartRecord(req, cb) {
        return this.request("StartRecord", req, cb);
    }
    async ModifyAppStatus(req, cb) {
        return this.request("ModifyAppStatus", req, cb);
    }
    async DescribeAgeDetectTask(req, cb) {
        return this.request("DescribeAgeDetectTask", req, cb);
    }
}
