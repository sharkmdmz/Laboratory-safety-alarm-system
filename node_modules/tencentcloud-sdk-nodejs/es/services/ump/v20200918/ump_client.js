import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("ump.tencentcloudapi.com", "2020-09-18", clientConfig);
    }
    async ReportServiceRegister(req, cb) {
        return this.request("ReportServiceRegister", req, cb);
    }
    async ModifyMultiBizConfig(req, cb) {
        return this.request("ModifyMultiBizConfig", req, cb);
    }
    async CreateCameraAlerts(req, cb) {
        return this.request("CreateCameraAlerts", req, cb);
    }
    async DescribeConfig(req, cb) {
        return this.request("DescribeConfig", req, cb);
    }
    async DescribeImage(req, cb) {
        return this.request("DescribeImage", req, cb);
    }
    async DeleteMultiBizAlert(req, cb) {
        return this.request("DeleteMultiBizAlert", req, cb);
    }
    async DescribeCameras(req, cb) {
        return this.request("DescribeCameras", req, cb);
    }
    async DescribeZones(req, cb) {
        return this.request("DescribeZones", req, cb);
    }
    async DeleteTask(req, cb) {
        return this.request("DeleteTask", req, cb);
    }
    async CreateProgramState(req, cb) {
        return this.request("CreateProgramState", req, cb);
    }
    async DescribeTasks(req, cb) {
        return this.request("DescribeTasks", req, cb);
    }
    async CreateMultiBizAlert(req, cb) {
        return this.request("CreateMultiBizAlert", req, cb);
    }
    async SearchImage(req, cb) {
        return this.request("SearchImage", req, cb);
    }
    async CreateServerState(req, cb) {
        return this.request("CreateServerState", req, cb);
    }
    async DescribeMultiBizBaseImage(req, cb) {
        return this.request("DescribeMultiBizBaseImage", req, cb);
    }
    async CreateCameraState(req, cb) {
        return this.request("CreateCameraState", req, cb);
    }
    async CreateCapture(req, cb) {
        return this.request("CreateCapture", req, cb);
    }
}
