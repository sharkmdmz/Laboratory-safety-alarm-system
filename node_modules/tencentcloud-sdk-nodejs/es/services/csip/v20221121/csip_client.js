import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("csip.tencentcloudapi.com", "2022-11-21", clientConfig);
    }
    async DescribeUebaRule(req, cb) {
        return this.request("DescribeUebaRule", req, cb);
    }
    async DescribeTaskLogList(req, cb) {
        return this.request("DescribeTaskLogList", req, cb);
    }
    async DeleteDomainAndIp(req, cb) {
        return this.request("DeleteDomainAndIp", req, cb);
    }
    async DescribeDbAssetInfo(req, cb) {
        return this.request("DescribeDbAssetInfo", req, cb);
    }
    async DescribeNICAssets(req, cb) {
        return this.request("DescribeNICAssets", req, cb);
    }
    async DescribeRiskCenterVULViewVULRiskList(req, cb) {
        return this.request("DescribeRiskCenterVULViewVULRiskList", req, cb);
    }
    async DescribeDomainAssets(req, cb) {
        return this.request("DescribeDomainAssets", req, cb);
    }
    async DescribePublicIpAssets(req, cb) {
        return this.request("DescribePublicIpAssets", req, cb);
    }
    async AddNewBindRoleUser(req, cb) {
        return this.request("AddNewBindRoleUser", req, cb);
    }
    async DescribeListenerList(req, cb) {
        return this.request("DescribeListenerList", req, cb);
    }
    async StopRiskCenterTask(req, cb) {
        return this.request("StopRiskCenterTask", req, cb);
    }
    async DeleteRiskScanTask(req, cb) {
        return this.request("DeleteRiskScanTask", req, cb);
    }
    async DescribeRiskCenterAssetViewWeakPasswordRiskList(req, cb) {
        return this.request("DescribeRiskCenterAssetViewWeakPasswordRiskList", req, cb);
    }
    async DescribeRiskCenterAssetViewVULRiskList(req, cb) {
        return this.request("DescribeRiskCenterAssetViewVULRiskList", req, cb);
    }
    async DescribeClusterPodAssets(req, cb) {
        return this.request("DescribeClusterPodAssets", req, cb);
    }
    async DescribeRiskCenterAssetViewCFGRiskList(req, cb) {
        return this.request("DescribeRiskCenterAssetViewCFGRiskList", req, cb);
    }
    async DescribeVpcAssets(req, cb) {
        return this.request("DescribeVpcAssets", req, cb);
    }
    async DescribeRiskCenterServerRiskList(req, cb) {
        return this.request("DescribeRiskCenterServerRiskList", req, cb);
    }
    async DescribeCVMAssets(req, cb) {
        return this.request("DescribeCVMAssets", req, cb);
    }
    async ModifyRiskCenterScanTask(req, cb) {
        return this.request("ModifyRiskCenterScanTask", req, cb);
    }
    async DescribeCFWAssetStatistics(req, cb) {
        return this.request("DescribeCFWAssetStatistics", req, cb);
    }
    async DescribeAssetViewVulRiskList(req, cb) {
        return this.request("DescribeAssetViewVulRiskList", req, cb);
    }
    async DescribeVULRiskDetail(req, cb) {
        return this.request("DescribeVULRiskDetail", req, cb);
    }
    async DescribeRiskCenterWebsiteRiskList(req, cb) {
        return this.request("DescribeRiskCenterWebsiteRiskList", req, cb);
    }
    async DescribeOrganizationInfo(req, cb) {
        return this.request("DescribeOrganizationInfo", req, cb);
    }
    async DescribeTaskLogURL(req, cb) {
        return this.request("DescribeTaskLogURL", req, cb);
    }
    async ModifyUebaRuleSwitch(req, cb) {
        return this.request("ModifyUebaRuleSwitch", req, cb);
    }
    async CreateRiskCenterScanTask(req, cb) {
        return this.request("CreateRiskCenterScanTask", req, cb);
    }
    async DescribeGatewayAssets(req, cb) {
        return this.request("DescribeGatewayAssets", req, cb);
    }
    async DescribeTopAttackInfo(req, cb) {
        return this.request("DescribeTopAttackInfo", req, cb);
    }
    async DescribeSearchBugInfo(req, cb) {
        return this.request("DescribeSearchBugInfo", req, cb);
    }
    async DescribeSubUserInfo(req, cb) {
        return this.request("DescribeSubUserInfo", req, cb);
    }
    async DescribeVulViewVulRiskList(req, cb) {
        return this.request("DescribeVulViewVulRiskList", req, cb);
    }
    async DescribeScanReportList(req, cb) {
        return this.request("DescribeScanReportList", req, cb);
    }
    async CreateDomainAndIp(req, cb) {
        return this.request("CreateDomainAndIp", req, cb);
    }
    async DescribeAlertList(req, cb) {
        return this.request("DescribeAlertList", req, cb);
    }
    async UpdateAlertStatusList(req, cb) {
        return this.request("UpdateAlertStatusList", req, cb);
    }
    async DescribeScanTaskList(req, cb) {
        return this.request("DescribeScanTaskList", req, cb);
    }
    async DescribeDbAssets(req, cb) {
        return this.request("DescribeDbAssets", req, cb);
    }
    async DescribeRiskCenterPortViewPortRiskList(req, cb) {
        return this.request("DescribeRiskCenterPortViewPortRiskList", req, cb);
    }
    async DescribeRiskCenterAssetViewPortRiskList(req, cb) {
        return this.request("DescribeRiskCenterAssetViewPortRiskList", req, cb);
    }
    async DescribeVULRiskAdvanceCFGList(req, cb) {
        return this.request("DescribeVULRiskAdvanceCFGList", req, cb);
    }
    async ModifyRiskCenterRiskStatus(req, cb) {
        return this.request("ModifyRiskCenterRiskStatus", req, cb);
    }
    async ModifyOrganizationAccountStatus(req, cb) {
        return this.request("ModifyOrganizationAccountStatus", req, cb);
    }
    async DescribeOrganizationUserInfo(req, cb) {
        return this.request("DescribeOrganizationUserInfo", req, cb);
    }
    async DescribeClusterAssets(req, cb) {
        return this.request("DescribeClusterAssets", req, cb);
    }
    async DescribeSubnetAssets(req, cb) {
        return this.request("DescribeSubnetAssets", req, cb);
    }
    async DescribeCVMAssetInfo(req, cb) {
        return this.request("DescribeCVMAssetInfo", req, cb);
    }
}
