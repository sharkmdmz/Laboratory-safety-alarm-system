import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("youmall.tencentcloudapi.com", "2018-02-28", clientConfig);
    }
    async DescribeCameraPerson(req, cb) {
        return this.request("DescribeCameraPerson", req, cb);
    }
    async DescribePersonInfo(req, cb) {
        return this.request("DescribePersonInfo", req, cb);
    }
    async DescribeZoneTrafficInfo(req, cb) {
        return this.request("DescribeZoneTrafficInfo", req, cb);
    }
    async DescribeZoneFlowAgeInfoByZoneId(req, cb) {
        return this.request("DescribeZoneFlowAgeInfoByZoneId", req, cb);
    }
    async RegisterCallback(req, cb) {
        return this.request("RegisterCallback", req, cb);
    }
    async DescribeZoneFlowGenderAvrStayTimeByZoneId(req, cb) {
        return this.request("DescribeZoneFlowGenderAvrStayTimeByZoneId", req, cb);
    }
    async DescribeZoneFlowAndStayTime(req, cb) {
        return this.request("DescribeZoneFlowAndStayTime", req, cb);
    }
    async DescribePersonVisitInfo(req, cb) {
        return this.request("DescribePersonVisitInfo", req, cb);
    }
    async DescribeZoneFlowHourlyByZoneId(req, cb) {
        return this.request("DescribeZoneFlowHourlyByZoneId", req, cb);
    }
    async DescribeShopInfo(req, cb) {
        return this.request("DescribeShopInfo", req, cb);
    }
    async DescribeFaceIdByTempId(req, cb) {
        return this.request("DescribeFaceIdByTempId", req, cb);
    }
    async DescribeZoneFlowGenderInfoByZoneId(req, cb) {
        return this.request("DescribeZoneFlowGenderInfoByZoneId", req, cb);
    }
    async DescribeShopTrafficInfo(req, cb) {
        return this.request("DescribeShopTrafficInfo", req, cb);
    }
    async DescribePersonInfoByFacePicture(req, cb) {
        return this.request("DescribePersonInfoByFacePicture", req, cb);
    }
    async CreateFacePicture(req, cb) {
        return this.request("CreateFacePicture", req, cb);
    }
    async CreateAccount(req, cb) {
        return this.request("CreateAccount", req, cb);
    }
    async DescribeShopHourTrafficInfo(req, cb) {
        return this.request("DescribeShopHourTrafficInfo", req, cb);
    }
    async DescribePersonTrace(req, cb) {
        return this.request("DescribePersonTrace", req, cb);
    }
    async DescribeZoneFlowDailyByZoneId(req, cb) {
        return this.request("DescribeZoneFlowDailyByZoneId", req, cb);
    }
    async DescribePersonArrivedMall(req, cb) {
        return this.request("DescribePersonArrivedMall", req, cb);
    }
    async DescribeClusterPersonArrivedMall(req, cb) {
        return this.request("DescribeClusterPersonArrivedMall", req, cb);
    }
    async DescribePersonTraceDetail(req, cb) {
        return this.request("DescribePersonTraceDetail", req, cb);
    }
    async ModifyPersonType(req, cb) {
        return this.request("ModifyPersonType", req, cb);
    }
    async ModifyPersonFeatureInfo(req, cb) {
        return this.request("ModifyPersonFeatureInfo", req, cb);
    }
    async DescribeHistoryNetworkInfo(req, cb) {
        return this.request("DescribeHistoryNetworkInfo", req, cb);
    }
    async DescribeNetworkInfo(req, cb) {
        return this.request("DescribeNetworkInfo", req, cb);
    }
    async DeletePersonFeature(req, cb) {
        return this.request("DeletePersonFeature", req, cb);
    }
    async ModifyPersonTagInfo(req, cb) {
        return this.request("ModifyPersonTagInfo", req, cb);
    }
    async DescribePerson(req, cb) {
        return this.request("DescribePerson", req, cb);
    }
    async DescribeClusterPersonTrace(req, cb) {
        return this.request("DescribeClusterPersonTrace", req, cb);
    }
    async DescribeTrajectoryData(req, cb) {
        return this.request("DescribeTrajectoryData", req, cb);
    }
}
