import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("trtc.tencentcloudapi.com", "2019-07-22", clientConfig);
    }
    async DescribeRoomInfo(req, cb) {
        return this.request("DescribeRoomInfo", req, cb);
    }
    async UpdateAIConversation(req, cb) {
        return this.request("UpdateAIConversation", req, cb);
    }
    async DescribeTrtcUsage(req, cb) {
        return this.request("DescribeTrtcUsage", req, cb);
    }
    async CreateBasicModeration(req, cb) {
        return this.request("CreateBasicModeration", req, cb);
    }
    async StopAIConversation(req, cb) {
        return this.request("StopAIConversation", req, cb);
    }
    async DescribeTRTCMarketQualityMetricData(req, cb) {
        return this.request("DescribeTRTCMarketQualityMetricData", req, cb);
    }
    async DescribeWebRecord(req, cb) {
        return this.request("DescribeWebRecord", req, cb);
    }
    async StartPublishCdnStream(req, cb) {
        return this.request("StartPublishCdnStream", req, cb);
    }
    async DescribeCallDetailInfo(req, cb) {
        return this.request("DescribeCallDetailInfo", req, cb);
    }
    async DescribeStreamIngest(req, cb) {
        return this.request("DescribeStreamIngest", req, cb);
    }
    async DescribeTRTCMarketScaleMetricData(req, cb) {
        return this.request("DescribeTRTCMarketScaleMetricData", req, cb);
    }
    async StartAIConversation(req, cb) {
        return this.request("StartAIConversation", req, cb);
    }
    async DescribeAIConversation(req, cb) {
        return this.request("DescribeAIConversation", req, cb);
    }
    async StartMCUMixTranscodeByStrRoomId(req, cb) {
        return this.request("StartMCUMixTranscodeByStrRoomId", req, cb);
    }
    async StartStreamIngest(req, cb) {
        return this.request("StartStreamIngest", req, cb);
    }
    async UpdateStreamIngest(req, cb) {
        return this.request("UpdateStreamIngest", req, cb);
    }
    async DeletePicture(req, cb) {
        return this.request("DeletePicture", req, cb);
    }
    async DescribeTRTCRealTimeQualityMetricData(req, cb) {
        return this.request("DescribeTRTCRealTimeQualityMetricData", req, cb);
    }
    async CreatePicture(req, cb) {
        return this.request("CreatePicture", req, cb);
    }
    async DescribeTRTCRealTimeScaleData(req, cb) {
        return this.request("DescribeTRTCRealTimeScaleData", req, cb);
    }
    async RemoveUser(req, cb) {
        return this.request("RemoveUser", req, cb);
    }
    async DeleteBasicModeration(req, cb) {
        return this.request("DeleteBasicModeration", req, cb);
    }
    async ModifyCloudRecording(req, cb) {
        return this.request("ModifyCloudRecording", req, cb);
    }
    async DescribeUserEvent(req, cb) {
        return this.request("DescribeUserEvent", req, cb);
    }
    async StartWebRecord(req, cb) {
        return this.request("StartWebRecord", req, cb);
    }
    async StartMCUMixTranscode(req, cb) {
        return this.request("StartMCUMixTranscode", req, cb);
    }
    async StartAITranscription(req, cb) {
        return this.request("StartAITranscription", req, cb);
    }
    async DescribeTRTCMarketScaleData(req, cb) {
        return this.request("DescribeTRTCMarketScaleData", req, cb);
    }
    async StopWebRecord(req, cb) {
        return this.request("StopWebRecord", req, cb);
    }
    async StopPublishCdnStream(req, cb) {
        return this.request("StopPublishCdnStream", req, cb);
    }
    async CreateCloudRecording(req, cb) {
        return this.request("CreateCloudRecording", req, cb);
    }
    async DescribeScaleInfo(req, cb) {
        return this.request("DescribeScaleInfo", req, cb);
    }
    async DescribeRelayUsage(req, cb) {
        return this.request("DescribeRelayUsage", req, cb);
    }
    async DescribeUserInfo(req, cb) {
        return this.request("DescribeUserInfo", req, cb);
    }
    async DismissRoomByStrRoomId(req, cb) {
        return this.request("DismissRoomByStrRoomId", req, cb);
    }
    async StopMCUMixTranscodeByStrRoomId(req, cb) {
        return this.request("StopMCUMixTranscodeByStrRoomId", req, cb);
    }
    async StopStreamIngest(req, cb) {
        return this.request("StopStreamIngest", req, cb);
    }
    async DescribeRecordingUsage(req, cb) {
        return this.request("DescribeRecordingUsage", req, cb);
    }
    async RemoveUserByStrRoomId(req, cb) {
        return this.request("RemoveUserByStrRoomId", req, cb);
    }
    async DescribeMixTranscodingUsage(req, cb) {
        return this.request("DescribeMixTranscodingUsage", req, cb);
    }
    async DismissRoom(req, cb) {
        return this.request("DismissRoom", req, cb);
    }
    async DescribeTrtcRoomUsage(req, cb) {
        return this.request("DescribeTrtcRoomUsage", req, cb);
    }
    async DescribeRecordStatistic(req, cb) {
        return this.request("DescribeRecordStatistic", req, cb);
    }
    async DescribeTrtcMcuTranscodeTime(req, cb) {
        return this.request("DescribeTrtcMcuTranscodeTime", req, cb);
    }
    async DescribeCloudRecording(req, cb) {
        return this.request("DescribeCloudRecording", req, cb);
    }
    async ModifyPicture(req, cb) {
        return this.request("ModifyPicture", req, cb);
    }
    async DescribeAITranscription(req, cb) {
        return this.request("DescribeAITranscription", req, cb);
    }
    async UpdatePublishCdnStream(req, cb) {
        return this.request("UpdatePublishCdnStream", req, cb);
    }
    async DescribeTRTCRealTimeQualityData(req, cb) {
        return this.request("DescribeTRTCRealTimeQualityData", req, cb);
    }
    async DeleteCloudRecording(req, cb) {
        return this.request("DeleteCloudRecording", req, cb);
    }
    async DescribePicture(req, cb) {
        return this.request("DescribePicture", req, cb);
    }
    async DescribeTRTCMarketQualityData(req, cb) {
        return this.request("DescribeTRTCMarketQualityData", req, cb);
    }
    async ControlAIConversation(req, cb) {
        return this.request("ControlAIConversation", req, cb);
    }
    async StopAITranscription(req, cb) {
        return this.request("StopAITranscription", req, cb);
    }
    async DescribeUnusualEvent(req, cb) {
        return this.request("DescribeUnusualEvent", req, cb);
    }
    async DescribeTRTCRealTimeScaleMetricData(req, cb) {
        return this.request("DescribeTRTCRealTimeScaleMetricData", req, cb);
    }
    async StopMCUMixTranscode(req, cb) {
        return this.request("StopMCUMixTranscode", req, cb);
    }
}
