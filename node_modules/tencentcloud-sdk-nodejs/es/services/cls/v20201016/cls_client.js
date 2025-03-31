import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("cls.tencentcloudapi.com", "2020-10-16", clientConfig);
    }
    async ModifyKafkaConsumer(req, cb) {
        return this.request("ModifyKafkaConsumer", req, cb);
    }
    async CreateKafkaRecharge(req, cb) {
        return this.request("CreateKafkaRecharge", req, cb);
    }
    async DescribeExports(req, cb) {
        return this.request("DescribeExports", req, cb);
    }
    async GetAlarmLog(req, cb) {
        return this.request("GetAlarmLog", req, cb);
    }
    async CreateIndex(req, cb) {
        return this.request("CreateIndex", req, cb);
    }
    async QueryMetric(req, cb) {
        return this.request("QueryMetric", req, cb);
    }
    async ModifyShipper(req, cb) {
        return this.request("ModifyShipper", req, cb);
    }
    async CreateWebCallback(req, cb) {
        return this.request("CreateWebCallback", req, cb);
    }
    async DescribeConfigs(req, cb) {
        return this.request("DescribeConfigs", req, cb);
    }
    async CreateDeliverCloudFunction(req, cb) {
        return this.request("CreateDeliverCloudFunction", req, cb);
    }
    async DeleteLogset(req, cb) {
        return this.request("DeleteLogset", req, cb);
    }
    async DeleteConfigFromMachineGroup(req, cb) {
        return this.request("DeleteConfigFromMachineGroup", req, cb);
    }
    async DeleteDataTransform(req, cb) {
        return this.request("DeleteDataTransform", req, cb);
    }
    async CreateLogset(req, cb) {
        return this.request("CreateLogset", req, cb);
    }
    async CreateTopic(req, cb) {
        return this.request("CreateTopic", req, cb);
    }
    async DeleteAlarmNotice(req, cb) {
        return this.request("DeleteAlarmNotice", req, cb);
    }
    async DescribeAlertRecordHistory(req, cb) {
        return this.request("DescribeAlertRecordHistory", req, cb);
    }
    async DeleteKafkaRecharge(req, cb) {
        return this.request("DeleteKafkaRecharge", req, cb);
    }
    async CreateConfig(req, cb) {
        return this.request("CreateConfig", req, cb);
    }
    async DescribeMachineGroupConfigs(req, cb) {
        return this.request("DescribeMachineGroupConfigs", req, cb);
    }
    async DescribeTopics(req, cb) {
        return this.request("DescribeTopics", req, cb);
    }
    async CreateCosRecharge(req, cb) {
        return this.request("CreateCosRecharge", req, cb);
    }
    async MergePartition(req, cb) {
        return this.request("MergePartition", req, cb);
    }
    async DeleteScheduledSql(req, cb) {
        return this.request("DeleteScheduledSql", req, cb);
    }
    async CreateExport(req, cb) {
        return this.request("CreateExport", req, cb);
    }
    async CloseKafkaConsumer(req, cb) {
        return this.request("CloseKafkaConsumer", req, cb);
    }
    async ModifyIndex(req, cb) {
        return this.request("ModifyIndex", req, cb);
    }
    async ModifyKafkaRecharge(req, cb) {
        return this.request("ModifyKafkaRecharge", req, cb);
    }
    async CreateAlarmShield(req, cb) {
        return this.request("CreateAlarmShield", req, cb);
    }
    async CreateShipper(req, cb) {
        return this.request("CreateShipper", req, cb);
    }
    async CreateNoticeContent(req, cb) {
        return this.request("CreateNoticeContent", req, cb);
    }
    async DeleteConsumer(req, cb) {
        return this.request("DeleteConsumer", req, cb);
    }
    async DeleteMachineGroup(req, cb) {
        return this.request("DeleteMachineGroup", req, cb);
    }
    async DescribeKafkaRecharges(req, cb) {
        return this.request("DescribeKafkaRecharges", req, cb);
    }
    async DescribeAlarms(req, cb) {
        return this.request("DescribeAlarms", req, cb);
    }
    async DescribeCosRecharges(req, cb) {
        return this.request("DescribeCosRecharges", req, cb);
    }
    async ApplyConfigToMachineGroup(req, cb) {
        return this.request("ApplyConfigToMachineGroup", req, cb);
    }
    async DeleteAlarmShield(req, cb) {
        return this.request("DeleteAlarmShield", req, cb);
    }
    async DescribeLogHistogram(req, cb) {
        return this.request("DescribeLogHistogram", req, cb);
    }
    async ModifyAlarmNotice(req, cb) {
        return this.request("ModifyAlarmNotice", req, cb);
    }
    async OpenKafkaConsumer(req, cb) {
        return this.request("OpenKafkaConsumer", req, cb);
    }
    async DescribeShipperTasks(req, cb) {
        return this.request("DescribeShipperTasks", req, cb);
    }
    async ModifyDashboardSubscribe(req, cb) {
        return this.request("ModifyDashboardSubscribe", req, cb);
    }
    async DeleteIndex(req, cb) {
        return this.request("DeleteIndex", req, cb);
    }
    async DescribeKafkaConsumer(req, cb) {
        return this.request("DescribeKafkaConsumer", req, cb);
    }
    async PreviewKafkaRecharge(req, cb) {
        return this.request("PreviewKafkaRecharge", req, cb);
    }
    async ModifyConfigExtra(req, cb) {
        return this.request("ModifyConfigExtra", req, cb);
    }
    async ModifyAlarmShield(req, cb) {
        return this.request("ModifyAlarmShield", req, cb);
    }
    async SearchDashboardSubscribe(req, cb) {
        return this.request("SearchDashboardSubscribe", req, cb);
    }
    async CreateConfigExtra(req, cb) {
        return this.request("CreateConfigExtra", req, cb);
    }
    async DescribeAlarmShields(req, cb) {
        return this.request("DescribeAlarmShields", req, cb);
    }
    async ModifyScheduledSql(req, cb) {
        return this.request("ModifyScheduledSql", req, cb);
    }
    async CreateMachineGroup(req, cb) {
        return this.request("CreateMachineGroup", req, cb);
    }
    async DeleteMachineGroupInfo(req, cb) {
        return this.request("DeleteMachineGroupInfo", req, cb);
    }
    async DescribeConsoleSharingList(req, cb) {
        return this.request("DescribeConsoleSharingList", req, cb);
    }
    async CreateConsoleSharing(req, cb) {
        return this.request("CreateConsoleSharing", req, cb);
    }
    async CreateScheduledSql(req, cb) {
        return this.request("CreateScheduledSql", req, cb);
    }
    async DescribeLogsets(req, cb) {
        return this.request("DescribeLogsets", req, cb);
    }
    async CreateDashboardSubscribe(req, cb) {
        return this.request("CreateDashboardSubscribe", req, cb);
    }
    async ModifyNoticeContent(req, cb) {
        return this.request("ModifyNoticeContent", req, cb);
    }
    async SearchCosRechargeInfo(req, cb) {
        return this.request("SearchCosRechargeInfo", req, cb);
    }
    async DescribeIndex(req, cb) {
        return this.request("DescribeIndex", req, cb);
    }
    async CreateAlarmNotice(req, cb) {
        return this.request("CreateAlarmNotice", req, cb);
    }
    async DeleteDashboardSubscribe(req, cb) {
        return this.request("DeleteDashboardSubscribe", req, cb);
    }
    async CreateDataTransform(req, cb) {
        return this.request("CreateDataTransform", req, cb);
    }
    async AddMachineGroupInfo(req, cb) {
        return this.request("AddMachineGroupInfo", req, cb);
    }
    async DeleteNoticeContent(req, cb) {
        return this.request("DeleteNoticeContent", req, cb);
    }
    async DescribeDataTransformInfo(req, cb) {
        return this.request("DescribeDataTransformInfo", req, cb);
    }
    async DescribeAlarmNotices(req, cb) {
        return this.request("DescribeAlarmNotices", req, cb);
    }
    async DescribePartitions(req, cb) {
        return this.request("DescribePartitions", req, cb);
    }
    async DeleteConfigExtra(req, cb) {
        return this.request("DeleteConfigExtra", req, cb);
    }
    async CheckFunction(req, cb) {
        return this.request("CheckFunction", req, cb);
    }
    async SearchLog(req, cb) {
        return this.request("SearchLog", req, cb);
    }
    async DeleteShipper(req, cb) {
        return this.request("DeleteShipper", req, cb);
    }
    async DeleteWebCallback(req, cb) {
        return this.request("DeleteWebCallback", req, cb);
    }
    async QueryRangeMetric(req, cb) {
        return this.request("QueryRangeMetric", req, cb);
    }
    async DescribeConfigMachineGroups(req, cb) {
        return this.request("DescribeConfigMachineGroups", req, cb);
    }
    async DeleteExport(req, cb) {
        return this.request("DeleteExport", req, cb);
    }
    async SplitPartition(req, cb) {
        return this.request("SplitPartition", req, cb);
    }
    async DeleteConsoleSharing(req, cb) {
        return this.request("DeleteConsoleSharing", req, cb);
    }
    async DescribeMachineGroups(req, cb) {
        return this.request("DescribeMachineGroups", req, cb);
    }
    async CreateConsumer(req, cb) {
        return this.request("CreateConsumer", req, cb);
    }
    async ModifyTopic(req, cb) {
        return this.request("ModifyTopic", req, cb);
    }
    async DescribeDashboardSubscribes(req, cb) {
        return this.request("DescribeDashboardSubscribes", req, cb);
    }
    async ModifyWebCallback(req, cb) {
        return this.request("ModifyWebCallback", req, cb);
    }
    async ModifyMachineGroup(req, cb) {
        return this.request("ModifyMachineGroup", req, cb);
    }
    async DescribeScheduledSqlInfo(req, cb) {
        return this.request("DescribeScheduledSqlInfo", req, cb);
    }
    async DeleteConfig(req, cb) {
        return this.request("DeleteConfig", req, cb);
    }
    async DescribeConfigExtras(req, cb) {
        return this.request("DescribeConfigExtras", req, cb);
    }
    async CheckRechargeKafkaServer(req, cb) {
        return this.request("CheckRechargeKafkaServer", req, cb);
    }
    async ModifyAlarm(req, cb) {
        return this.request("ModifyAlarm", req, cb);
    }
    async DescribeShippers(req, cb) {
        return this.request("DescribeShippers", req, cb);
    }
    async ModifyConsoleSharing(req, cb) {
        return this.request("ModifyConsoleSharing", req, cb);
    }
    async DescribeDashboards(req, cb) {
        return this.request("DescribeDashboards", req, cb);
    }
    async ModifyCosRecharge(req, cb) {
        return this.request("ModifyCosRecharge", req, cb);
    }
    async ModifyConfig(req, cb) {
        return this.request("ModifyConfig", req, cb);
    }
    async UploadLog(req, cb) {
        return this.request("UploadLog", req, cb);
    }
    async DeleteTopic(req, cb) {
        return this.request("DeleteTopic", req, cb);
    }
    async ModifyLogset(req, cb) {
        return this.request("ModifyLogset", req, cb);
    }
    async ModifyConsumer(req, cb) {
        return this.request("ModifyConsumer", req, cb);
    }
    async ModifyDataTransform(req, cb) {
        return this.request("ModifyDataTransform", req, cb);
    }
    async DeleteAlarm(req, cb) {
        return this.request("DeleteAlarm", req, cb);
    }
    async DescribeLogContext(req, cb) {
        return this.request("DescribeLogContext", req, cb);
    }
    async DescribeConsumer(req, cb) {
        return this.request("DescribeConsumer", req, cb);
    }
    async DescribeNoticeContents(req, cb) {
        return this.request("DescribeNoticeContents", req, cb);
    }
    async DescribeMachines(req, cb) {
        return this.request("DescribeMachines", req, cb);
    }
    async RetryShipperTask(req, cb) {
        return this.request("RetryShipperTask", req, cb);
    }
    async CreateAlarm(req, cb) {
        return this.request("CreateAlarm", req, cb);
    }
    async DescribeWebCallbacks(req, cb) {
        return this.request("DescribeWebCallbacks", req, cb);
    }
}
