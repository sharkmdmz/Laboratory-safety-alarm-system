import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("bda.tencentcloudapi.com", "2020-03-24", clientConfig);
    }
    async SearchTrace(req, cb) {
        return this.request("SearchTrace", req, cb);
    }
    async TerminateSegmentationTask(req, cb) {
        return this.request("TerminateSegmentationTask", req, cb);
    }
    async GetSummaryInfo(req, cb) {
        return this.request("GetSummaryInfo", req, cb);
    }
    async DetectBody(req, cb) {
        return this.request("DetectBody", req, cb);
    }
    async SegmentPortraitPic(req, cb) {
        return this.request("SegmentPortraitPic", req, cb);
    }
    async DetectBodyJoints(req, cb) {
        return this.request("DetectBodyJoints", req, cb);
    }
    async CreateTrace(req, cb) {
        return this.request("CreateTrace", req, cb);
    }
    async DeleteGroup(req, cb) {
        return this.request("DeleteGroup", req, cb);
    }
    async DeletePerson(req, cb) {
        return this.request("DeletePerson", req, cb);
    }
    async ModifyPersonInfo(req, cb) {
        return this.request("ModifyPersonInfo", req, cb);
    }
    async ModifyGroup(req, cb) {
        return this.request("ModifyGroup", req, cb);
    }
    async GetGroupList(req, cb) {
        return this.request("GetGroupList", req, cb);
    }
    async DescribeSegmentationTask(req, cb) {
        return this.request("DescribeSegmentationTask", req, cb);
    }
    async CreateGroup(req, cb) {
        return this.request("CreateGroup", req, cb);
    }
    async CreatePerson(req, cb) {
        return this.request("CreatePerson", req, cb);
    }
    async SegmentCustomizedPortraitPic(req, cb) {
        return this.request("SegmentCustomizedPortraitPic", req, cb);
    }
    async GetPersonList(req, cb) {
        return this.request("GetPersonList", req, cb);
    }
    async CreateSegmentationTask(req, cb) {
        return this.request("CreateSegmentationTask", req, cb);
    }
}
