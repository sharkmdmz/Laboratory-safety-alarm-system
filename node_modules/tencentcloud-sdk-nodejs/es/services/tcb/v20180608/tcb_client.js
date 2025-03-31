import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("tcb.tencentcloudapi.com", "2018-06-08", clientConfig);
    }
    async DescribeWxCloudBaseRunSubNets(req, cb) {
        return this.request("DescribeWxCloudBaseRunSubNets", req, cb);
    }
    async DescribeCloudBaseRunAllVpcs(req, cb) {
        return this.request("DescribeCloudBaseRunAllVpcs", req, cb);
    }
    async DescribeSmsQuotas(req, cb) {
        return this.request("DescribeSmsQuotas", req, cb);
    }
    async DescribeCloudBaseRunServerDomainName(req, cb) {
        return this.request("DescribeCloudBaseRunServerDomainName", req, cb);
    }
    async CreateWxCloudBaseRunEnv(req, cb) {
        return this.request("CreateWxCloudBaseRunEnv", req, cb);
    }
    async TurnOffStandaloneGateway(req, cb) {
        return this.request("TurnOffStandaloneGateway", req, cb);
    }
    async TurnOnStandaloneGateway(req, cb) {
        return this.request("TurnOnStandaloneGateway", req, cb);
    }
    async CreatePostpayPackage(req, cb) {
        return this.request("CreatePostpayPackage", req, cb);
    }
    async DescribeBaasPackageList(req, cb) {
        return this.request("DescribeBaasPackageList", req, cb);
    }
    async DescribeCloudBaseProjectVersionList(req, cb) {
        return this.request("DescribeCloudBaseProjectVersionList", req, cb);
    }
    async DescribeCloudBaseProjectLatestVersionList(req, cb) {
        return this.request("DescribeCloudBaseProjectLatestVersionList", req, cb);
    }
    async DescribeCloudBaseRunConfForGateWay(req, cb) {
        return this.request("DescribeCloudBaseRunConfForGateWay", req, cb);
    }
    async EstablishCloudBaseRunServer(req, cb) {
        return this.request("EstablishCloudBaseRunServer", req, cb);
    }
    async CreateAndDeployCloudBaseProject(req, cb) {
        return this.request("CreateAndDeployCloudBaseProject", req, cb);
    }
    async CheckTcbService(req, cb) {
        return this.request("CheckTcbService", req, cb);
    }
    async DeleteEndUser(req, cb) {
        return this.request("DeleteEndUser", req, cb);
    }
    async EstablishWxGatewayRoute(req, cb) {
        return this.request("EstablishWxGatewayRoute", req, cb);
    }
    async DescribeUserActivityInfo(req, cb) {
        return this.request("DescribeUserActivityInfo", req, cb);
    }
    async DeleteCloudBaseProjectLatestVersion(req, cb) {
        return this.request("DeleteCloudBaseProjectLatestVersion", req, cb);
    }
    async DescribeEndUserStatistic(req, cb) {
        return this.request("DescribeEndUserStatistic", req, cb);
    }
    async FreezeCloudBaseRunServers(req, cb) {
        return this.request("FreezeCloudBaseRunServers", req, cb);
    }
    async DescribeCloudBaseBuildService(req, cb) {
        return this.request("DescribeCloudBaseBuildService", req, cb);
    }
    async DescribeEndUsers(req, cb) {
        return this.request("DescribeEndUsers", req, cb);
    }
    async CreateStaticStore(req, cb) {
        return this.request("CreateStaticStore", req, cb);
    }
    async EditAuthConfig(req, cb) {
        return this.request("EditAuthConfig", req, cb);
    }
    async DescribeSpecialCostItems(req, cb) {
        return this.request("DescribeSpecialCostItems", req, cb);
    }
    async DeleteGatewayVersion(req, cb) {
        return this.request("DeleteGatewayVersion", req, cb);
    }
    async ModifyClsTopic(req, cb) {
        return this.request("ModifyClsTopic", req, cb);
    }
    async DescribeHostingDomainTask(req, cb) {
        return this.request("DescribeHostingDomainTask", req, cb);
    }
    async DeleteWxGatewayRoute(req, cb) {
        return this.request("DeleteWxGatewayRoute", req, cb);
    }
    async CreateWxCloudBaseRunServerDBCluster(req, cb) {
        return this.request("CreateWxCloudBaseRunServerDBCluster", req, cb);
    }
    async ModifyGatewayVersionTraffic(req, cb) {
        return this.request("ModifyGatewayVersionTraffic", req, cb);
    }
    async CreateAuthDomain(req, cb) {
        return this.request("CreateAuthDomain", req, cb);
    }
    async DescribeEnvs(req, cb) {
        return this.request("DescribeEnvs", req, cb);
    }
    async DescribeCloudBaseRunResource(req, cb) {
        return this.request("DescribeCloudBaseRunResource", req, cb);
    }
    async DescribeWxGatewayRoutes(req, cb) {
        return this.request("DescribeWxGatewayRoutes", req, cb);
    }
    async ModifyEndUser(req, cb) {
        return this.request("ModifyEndUser", req, cb);
    }
    async DescribeEnvDealRegion(req, cb) {
        return this.request("DescribeEnvDealRegion", req, cb);
    }
    async DescribeGatewayCurveData(req, cb) {
        return this.request("DescribeGatewayCurveData", req, cb);
    }
    async DescribeExtensionUploadInfo(req, cb) {
        return this.request("DescribeExtensionUploadInfo", req, cb);
    }
    async DeleteCloudBaseRunServerVersion(req, cb) {
        return this.request("DeleteCloudBaseRunServerVersion", req, cb);
    }
    async CreateCloudBaseRunResource(req, cb) {
        return this.request("CreateCloudBaseRunResource", req, cb);
    }
    async DescribeExtraPkgBillingInfo(req, cb) {
        return this.request("DescribeExtraPkgBillingInfo", req, cb);
    }
    async DescribeCloudBaseRunVersionSnapshot(req, cb) {
        return this.request("DescribeCloudBaseRunVersionSnapshot", req, cb);
    }
    async DescribeCurveData(req, cb) {
        return this.request("DescribeCurveData", req, cb);
    }
    async ModifyDatabaseACL(req, cb) {
        return this.request("ModifyDatabaseACL", req, cb);
    }
    async DescribeWxGateways(req, cb) {
        return this.request("DescribeWxGateways", req, cb);
    }
    async CommonServiceAPI(req, cb) {
        return this.request("CommonServiceAPI", req, cb);
    }
    async DescribeEnvLimit(req, cb) {
        return this.request("DescribeEnvLimit", req, cb);
    }
    async DestroyStaticStore(req, cb) {
        return this.request("DestroyStaticStore", req, cb);
    }
    async DescribeEnvFreeQuota(req, cb) {
        return this.request("DescribeEnvFreeQuota", req, cb);
    }
    async DestroyStandaloneGateway(req, cb) {
        return this.request("DestroyStandaloneGateway", req, cb);
    }
    async CreateHostingDomain(req, cb) {
        return this.request("CreateHostingDomain", req, cb);
    }
    async BindEnvGateway(req, cb) {
        return this.request("BindEnvGateway", req, cb);
    }
    async CreateCloudBaseRunServerVersion(req, cb) {
        return this.request("CreateCloudBaseRunServerVersion", req, cb);
    }
    async DescribeCloudBaseRunServerVersion(req, cb) {
        return this.request("DescribeCloudBaseRunServerVersion", req, cb);
    }
    async DescribeQuotaData(req, cb) {
        return this.request("DescribeQuotaData", req, cb);
    }
    async DescribeCloudBaseRunServer(req, cb) {
        return this.request("DescribeCloudBaseRunServer", req, cb);
    }
    async DescribeStandaloneGateway(req, cb) {
        return this.request("DescribeStandaloneGateway", req, cb);
    }
    async DescribeCloudBaseRunResourceForExtend(req, cb) {
        return this.request("DescribeCloudBaseRunResourceForExtend", req, cb);
    }
    async DescribePostpayPackageFreeQuotas(req, cb) {
        return this.request("DescribePostpayPackageFreeQuotas", req, cb);
    }
    async ReplaceActivityRecord(req, cb) {
        return this.request("ReplaceActivityRecord", req, cb);
    }
    async DescribeEndUserLoginStatistic(req, cb) {
        return this.request("DescribeEndUserLoginStatistic", req, cb);
    }
    async DescribeCloudBaseRunOperationTypes(req, cb) {
        return this.request("DescribeCloudBaseRunOperationTypes", req, cb);
    }
    async DestroyEnv(req, cb) {
        return this.request("DestroyEnv", req, cb);
    }
    async DescribeCloudBaseRunOneClickTaskExternal(req, cb) {
        return this.request("DescribeCloudBaseRunOneClickTaskExternal", req, cb);
    }
    async DescribeCloudBaseRunVersionRsByCondition(req, cb) {
        return this.request("DescribeCloudBaseRunVersionRsByCondition", req, cb);
    }
    async DescribePostpayFreeQuotas(req, cb) {
        return this.request("DescribePostpayFreeQuotas", req, cb);
    }
    async DescribeGatewayVersions(req, cb) {
        return this.request("DescribeGatewayVersions", req, cb);
    }
    async DescribeWxCloudBaseRunEnvs(req, cb) {
        return this.request("DescribeWxCloudBaseRunEnvs", req, cb);
    }
    async DescribeCbrServerVersion(req, cb) {
        return this.request("DescribeCbrServerVersion", req, cb);
    }
    async RollUpdateCloudBaseRunServerVersion(req, cb) {
        return this.request("RollUpdateCloudBaseRunServerVersion", req, cb);
    }
    async DescribeEnvPostpaidDeduct(req, cb) {
        return this.request("DescribeEnvPostpaidDeduct", req, cb);
    }
    async DescribeDownloadFile(req, cb) {
        return this.request("DescribeDownloadFile", req, cb);
    }
    async CreateStandaloneGateway(req, cb) {
        return this.request("CreateStandaloneGateway", req, cb);
    }
    async DescribeAuthDomains(req, cb) {
        return this.request("DescribeAuthDomains", req, cb);
    }
    async UnfreezeCloudBaseRunServers(req, cb) {
        return this.request("UnfreezeCloudBaseRunServers", req, cb);
    }
    async DescribeBillingInfo(req, cb) {
        return this.request("DescribeBillingInfo", req, cb);
    }
    async ReinstateEnv(req, cb) {
        return this.request("ReinstateEnv", req, cb);
    }
    async DescribeDatabaseACL(req, cb) {
        return this.request("DescribeDatabaseACL", req, cb);
    }
    async ModifyCloudBaseRunServerFlowConf(req, cb) {
        return this.request("ModifyCloudBaseRunServerFlowConf", req, cb);
    }
    async DescribeGraphData(req, cb) {
        return this.request("DescribeGraphData", req, cb);
    }
    async DescribeActivityRecord(req, cb) {
        return this.request("DescribeActivityRecord", req, cb);
    }
    async SearchClsLog(req, cb) {
        return this.request("SearchClsLog", req, cb);
    }
    async DescribeStandaloneGatewayPackage(req, cb) {
        return this.request("DescribeStandaloneGatewayPackage", req, cb);
    }
    async ModifyEnv(req, cb) {
        return this.request("ModifyEnv", req, cb);
    }
    async ModifyCloudBaseRunServerVersion(req, cb) {
        return this.request("ModifyCloudBaseRunServerVersion", req, cb);
    }
    async DescribeCloudBaseRunVersion(req, cb) {
        return this.request("DescribeCloudBaseRunVersion", req, cb);
    }
    async DescribeCloudBaseRunPodList(req, cb) {
        return this.request("DescribeCloudBaseRunPodList", req, cb);
    }
}
