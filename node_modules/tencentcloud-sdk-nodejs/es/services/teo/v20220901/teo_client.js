import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("teo.tencentcloudapi.com", "2022-09-01", clientConfig);
    }
    async DestroyPlan(req, cb) {
        return this.request("DestroyPlan", req, cb);
    }
    async CreateDnsRecord(req, cb) {
        return this.request("CreateDnsRecord", req, cb);
    }
    async ExportZoneConfig(req, cb) {
        return this.request("ExportZoneConfig", req, cb);
    }
    async DescribeContentIdentifiers(req, cb) {
        return this.request("DescribeContentIdentifiers", req, cb);
    }
    async DeleteFunction(req, cb) {
        return this.request("DeleteFunction", req, cb);
    }
    async CreatePurgeTask(req, cb) {
        return this.request("CreatePurgeTask", req, cb);
    }
    async DownloadL4Logs(req, cb) {
        return this.request("DownloadL4Logs", req, cb);
    }
    async DescribePrefetchTasks(req, cb) {
        return this.request("DescribePrefetchTasks", req, cb);
    }
    async DescribeContentQuota(req, cb) {
        return this.request("DescribeContentQuota", req, cb);
    }
    async DescribeIdentifications(req, cb) {
        return this.request("DescribeIdentifications", req, cb);
    }
    async DescribeRealtimeLogDeliveryTasks(req, cb) {
        return this.request("DescribeRealtimeLogDeliveryTasks", req, cb);
    }
    async VerifyOwnership(req, cb) {
        return this.request("VerifyOwnership", req, cb);
    }
    async CreateFunctionRule(req, cb) {
        return this.request("CreateFunctionRule", req, cb);
    }
    async DeleteFunctionRules(req, cb) {
        return this.request("DeleteFunctionRules", req, cb);
    }
    async IdentifyZone(req, cb) {
        return this.request("IdentifyZone", req, cb);
    }
    async DescribeDefaultCertificates(req, cb) {
        return this.request("DescribeDefaultCertificates", req, cb);
    }
    async ModifyL7AccRule(req, cb) {
        return this.request("ModifyL7AccRule", req, cb);
    }
    async DescribeAccelerationDomains(req, cb) {
        return this.request("DescribeAccelerationDomains", req, cb);
    }
    async DescribeFunctionRuntimeEnvironment(req, cb) {
        return this.request("DescribeFunctionRuntimeEnvironment", req, cb);
    }
    async ModifyOriginGroup(req, cb) {
        return this.request("ModifyOriginGroup", req, cb);
    }
    async DeleteApplicationProxy(req, cb) {
        return this.request("DeleteApplicationProxy", req, cb);
    }
    async ModifyL7AccSetting(req, cb) {
        return this.request("ModifyL7AccSetting", req, cb);
    }
    async ModifyL4ProxyStatus(req, cb) {
        return this.request("ModifyL4ProxyStatus", req, cb);
    }
    async DownloadL7Logs(req, cb) {
        return this.request("DownloadL7Logs", req, cb);
    }
    async DescribeEnvironments(req, cb) {
        return this.request("DescribeEnvironments", req, cb);
    }
    async IncreasePlanQuota(req, cb) {
        return this.request("IncreasePlanQuota", req, cb);
    }
    async DeleteApplicationProxyRule(req, cb) {
        return this.request("DeleteApplicationProxyRule", req, cb);
    }
    async CheckCnameStatus(req, cb) {
        return this.request("CheckCnameStatus", req, cb);
    }
    async ModifyZone(req, cb) {
        return this.request("ModifyZone", req, cb);
    }
    async CreatePrefetchTask(req, cb) {
        return this.request("CreatePrefetchTask", req, cb);
    }
    async DeleteAliasDomain(req, cb) {
        return this.request("DeleteAliasDomain", req, cb);
    }
    async DescribeOverviewL7Data(req, cb) {
        return this.request("DescribeOverviewL7Data", req, cb);
    }
    async CreateAccelerationDomain(req, cb) {
        return this.request("CreateAccelerationDomain", req, cb);
    }
    async DescribeConfigGroupVersionDetail(req, cb) {
        return this.request("DescribeConfigGroupVersionDetail", req, cb);
    }
    async DescribeL7AccRules(req, cb) {
        return this.request("DescribeL7AccRules", req, cb);
    }
    async BindSecurityTemplateToEntity(req, cb) {
        return this.request("BindSecurityTemplateToEntity", req, cb);
    }
    async ModifyApplicationProxyRuleStatus(req, cb) {
        return this.request("ModifyApplicationProxyRuleStatus", req, cb);
    }
    async CreatePlanForZone(req, cb) {
        return this.request("CreatePlanForZone", req, cb);
    }
    async DeleteOriginGroup(req, cb) {
        return this.request("DeleteOriginGroup", req, cb);
    }
    async DescribeLoadBalancerList(req, cb) {
        return this.request("DescribeLoadBalancerList", req, cb);
    }
    async CreateSecurityIPGroup(req, cb) {
        return this.request("CreateSecurityIPGroup", req, cb);
    }
    async DescribeIPRegion(req, cb) {
        return this.request("DescribeIPRegion", req, cb);
    }
    async ModifyLoadBalancer(req, cb) {
        return this.request("ModifyLoadBalancer", req, cb);
    }
    async DeleteAccelerationDomains(req, cb) {
        return this.request("DeleteAccelerationDomains", req, cb);
    }
    async CreateRealtimeLogDeliveryTask(req, cb) {
        return this.request("CreateRealtimeLogDeliveryTask", req, cb);
    }
    async ModifyL4Proxy(req, cb) {
        return this.request("ModifyL4Proxy", req, cb);
    }
    async ModifyL4ProxyRules(req, cb) {
        return this.request("ModifyL4ProxyRules", req, cb);
    }
    async ModifyDnsRecords(req, cb) {
        return this.request("ModifyDnsRecords", req, cb);
    }
    async DescribeTimingL7CacheData(req, cb) {
        return this.request("DescribeTimingL7CacheData", req, cb);
    }
    async DescribeConfigGroupVersions(req, cb) {
        return this.request("DescribeConfigGroupVersions", req, cb);
    }
    async ModifyL7AccRulePriority(req, cb) {
        return this.request("ModifyL7AccRulePriority", req, cb);
    }
    async ModifyZoneSetting(req, cb) {
        return this.request("ModifyZoneSetting", req, cb);
    }
    async CreateAliasDomain(req, cb) {
        return this.request("CreateAliasDomain", req, cb);
    }
    async ModifyAliasDomainStatus(req, cb) {
        return this.request("ModifyAliasDomainStatus", req, cb);
    }
    async DescribeSecurityIPGroup(req, cb) {
        return this.request("DescribeSecurityIPGroup", req, cb);
    }
    async CreateL4ProxyRules(req, cb) {
        return this.request("CreateL4ProxyRules", req, cb);
    }
    async DescribeTimingL4Data(req, cb) {
        return this.request("DescribeTimingL4Data", req, cb);
    }
    async DescribeTopL7CacheData(req, cb) {
        return this.request("DescribeTopL7CacheData", req, cb);
    }
    async ModifyRule(req, cb) {
        return this.request("ModifyRule", req, cb);
    }
    async DescribeTopL7AnalysisData(req, cb) {
        return this.request("DescribeTopL7AnalysisData", req, cb);
    }
    async DeleteDnsRecords(req, cb) {
        return this.request("DeleteDnsRecords", req, cb);
    }
    async ModifySecurityPolicy(req, cb) {
        return this.request("ModifySecurityPolicy", req, cb);
    }
    async ModifyPlan(req, cb) {
        return this.request("ModifyPlan", req, cb);
    }
    async DeleteL7AccRules(req, cb) {
        return this.request("DeleteL7AccRules", req, cb);
    }
    async BindZoneToPlan(req, cb) {
        return this.request("BindZoneToPlan", req, cb);
    }
    async DescribeOriginGroupHealthStatus(req, cb) {
        return this.request("DescribeOriginGroupHealthStatus", req, cb);
    }
    async DeleteL4ProxyRules(req, cb) {
        return this.request("DeleteL4ProxyRules", req, cb);
    }
    async CreateCustomizeErrorPage(req, cb) {
        return this.request("CreateCustomizeErrorPage", req, cb);
    }
    async ModifyAccelerationDomain(req, cb) {
        return this.request("ModifyAccelerationDomain", req, cb);
    }
    async CreateL4Proxy(req, cb) {
        return this.request("CreateL4Proxy", req, cb);
    }
    async ModifyApplicationProxyStatus(req, cb) {
        return this.request("ModifyApplicationProxyStatus", req, cb);
    }
    async CreatePlan(req, cb) {
        return this.request("CreatePlan", req, cb);
    }
    async DescribeTimingL7AnalysisData(req, cb) {
        return this.request("DescribeTimingL7AnalysisData", req, cb);
    }
    async CreateFunction(req, cb) {
        return this.request("CreateFunction", req, cb);
    }
    async DescribeApplicationProxies(req, cb) {
        return this.request("DescribeApplicationProxies", req, cb);
    }
    async CreateSharedCNAME(req, cb) {
        return this.request("CreateSharedCNAME", req, cb);
    }
    async CreateRule(req, cb) {
        return this.request("CreateRule", req, cb);
    }
    async CreateConfigGroupVersion(req, cb) {
        return this.request("CreateConfigGroupVersion", req, cb);
    }
    async ModifyDnsRecordsStatus(req, cb) {
        return this.request("ModifyDnsRecordsStatus", req, cb);
    }
    async ModifyFunction(req, cb) {
        return this.request("ModifyFunction", req, cb);
    }
    async ModifyApplicationProxy(req, cb) {
        return this.request("ModifyApplicationProxy", req, cb);
    }
    async CreateZone(req, cb) {
        return this.request("CreateZone", req, cb);
    }
    async ModifyFunctionRule(req, cb) {
        return this.request("ModifyFunctionRule", req, cb);
    }
    async DescribeAvailablePlans(req, cb) {
        return this.request("DescribeAvailablePlans", req, cb);
    }
    async DescribeCustomErrorPages(req, cb) {
        return this.request("DescribeCustomErrorPages", req, cb);
    }
    async DeleteLoadBalancer(req, cb) {
        return this.request("DeleteLoadBalancer", req, cb);
    }
    async DeleteContentIdentifier(req, cb) {
        return this.request("DeleteContentIdentifier", req, cb);
    }
    async DescribeRulesSetting(req, cb) {
        return this.request("DescribeRulesSetting", req, cb);
    }
    async ModifyAccelerationDomainStatuses(req, cb) {
        return this.request("ModifyAccelerationDomainStatuses", req, cb);
    }
    async DescribeFunctionRules(req, cb) {
        return this.request("DescribeFunctionRules", req, cb);
    }
    async DeleteRealtimeLogDeliveryTask(req, cb) {
        return this.request("DeleteRealtimeLogDeliveryTask", req, cb);
    }
    async DescribeDDoSAttackTopData(req, cb) {
        return this.request("DescribeDDoSAttackTopData", req, cb);
    }
    async ModifyZoneStatus(req, cb) {
        return this.request("ModifyZoneStatus", req, cb);
    }
    async CreateL7AccRules(req, cb) {
        return this.request("CreateL7AccRules", req, cb);
    }
    async DescribePurgeTasks(req, cb) {
        return this.request("DescribePurgeTasks", req, cb);
    }
    async DeleteRules(req, cb) {
        return this.request("DeleteRules", req, cb);
    }
    async DescribeL4ProxyRules(req, cb) {
        return this.request("DescribeL4ProxyRules", req, cb);
    }
    async DeleteCustomErrorPage(req, cb) {
        return this.request("DeleteCustomErrorPage", req, cb);
    }
    async HandleFunctionRuntimeEnvironment(req, cb) {
        return this.request("HandleFunctionRuntimeEnvironment", req, cb);
    }
    async DescribeDDoSAttackEvent(req, cb) {
        return this.request("DescribeDDoSAttackEvent", req, cb);
    }
    async ModifyContentIdentifier(req, cb) {
        return this.request("ModifyContentIdentifier", req, cb);
    }
    async UpgradePlan(req, cb) {
        return this.request("UpgradePlan", req, cb);
    }
    async DescribeSecurityPolicy(req, cb) {
        return this.request("DescribeSecurityPolicy", req, cb);
    }
    async ModifyFunctionRulePriority(req, cb) {
        return this.request("ModifyFunctionRulePriority", req, cb);
    }
    async ModifySecurityIPGroup(req, cb) {
        return this.request("ModifySecurityIPGroup", req, cb);
    }
    async DescribeRules(req, cb) {
        return this.request("DescribeRules", req, cb);
    }
    async CreateCLSIndex(req, cb) {
        return this.request("CreateCLSIndex", req, cb);
    }
    async CreateApplicationProxy(req, cb) {
        return this.request("CreateApplicationProxy", req, cb);
    }
    async DescribeOriginGroup(req, cb) {
        return this.request("DescribeOriginGroup", req, cb);
    }
    async ModifyAliasDomain(req, cb) {
        return this.request("ModifyAliasDomain", req, cb);
    }
    async CreateLoadBalancer(req, cb) {
        return this.request("CreateLoadBalancer", req, cb);
    }
    async ModifyApplicationProxyRule(req, cb) {
        return this.request("ModifyApplicationProxyRule", req, cb);
    }
    async DescribeL7AccSetting(req, cb) {
        return this.request("DescribeL7AccSetting", req, cb);
    }
    async CreateOriginGroup(req, cb) {
        return this.request("CreateOriginGroup", req, cb);
    }
    async ModifyHostsCertificate(req, cb) {
        return this.request("ModifyHostsCertificate", req, cb);
    }
    async DescribeDeployHistory(req, cb) {
        return this.request("DescribeDeployHistory", req, cb);
    }
    async DeployConfigGroupVersion(req, cb) {
        return this.request("DeployConfigGroupVersion", req, cb);
    }
    async DescribeHostsSetting(req, cb) {
        return this.request("DescribeHostsSetting", req, cb);
    }
    async DescribeSecurityTemplateBindings(req, cb) {
        return this.request("DescribeSecurityTemplateBindings", req, cb);
    }
    async DeleteL4Proxy(req, cb) {
        return this.request("DeleteL4Proxy", req, cb);
    }
    async BindSharedCNAME(req, cb) {
        return this.request("BindSharedCNAME", req, cb);
    }
    async ModifyRealtimeLogDeliveryTask(req, cb) {
        return this.request("ModifyRealtimeLogDeliveryTask", req, cb);
    }
    async DescribeOriginProtection(req, cb) {
        return this.request("DescribeOriginProtection", req, cb);
    }
    async ModifyL4ProxyRulesStatus(req, cb) {
        return this.request("ModifyL4ProxyRulesStatus", req, cb);
    }
    async RenewPlan(req, cb) {
        return this.request("RenewPlan", req, cb);
    }
    async DescribeZoneSetting(req, cb) {
        return this.request("DescribeZoneSetting", req, cb);
    }
    async DescribeZoneConfigImportResult(req, cb) {
        return this.request("DescribeZoneConfigImportResult", req, cb);
    }
    async CreateContentIdentifier(req, cb) {
        return this.request("CreateContentIdentifier", req, cb);
    }
    async DeleteSecurityIPGroup(req, cb) {
        return this.request("DeleteSecurityIPGroup", req, cb);
    }
    async CreateApplicationProxyRule(req, cb) {
        return this.request("CreateApplicationProxyRule", req, cb);
    }
    async DescribeZones(req, cb) {
        return this.request("DescribeZones", req, cb);
    }
    async DescribeFunctions(req, cb) {
        return this.request("DescribeFunctions", req, cb);
    }
    async DeleteZone(req, cb) {
        return this.request("DeleteZone", req, cb);
    }
    async DescribeSecurityIPGroupInfo(req, cb) {
        return this.request("DescribeSecurityIPGroupInfo", req, cb);
    }
    async DescribeDnsRecords(req, cb) {
        return this.request("DescribeDnsRecords", req, cb);
    }
    async ImportZoneConfig(req, cb) {
        return this.request("ImportZoneConfig", req, cb);
    }
    async ModifyCustomErrorPage(req, cb) {
        return this.request("ModifyCustomErrorPage", req, cb);
    }
    async DescribeDDoSAttackData(req, cb) {
        return this.request("DescribeDDoSAttackData", req, cb);
    }
    async DeleteSharedCNAME(req, cb) {
        return this.request("DeleteSharedCNAME", req, cb);
    }
    async DescribeAliasDomains(req, cb) {
        return this.request("DescribeAliasDomains", req, cb);
    }
    async DescribeL4Proxy(req, cb) {
        return this.request("DescribeL4Proxy", req, cb);
    }
    async DescribeBillingData(req, cb) {
        return this.request("DescribeBillingData", req, cb);
    }
}
