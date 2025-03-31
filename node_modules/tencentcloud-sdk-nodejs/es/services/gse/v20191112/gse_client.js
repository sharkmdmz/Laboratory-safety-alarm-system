import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("gse.tencentcloudapi.com", "2019-11-12", clientConfig);
    }
    async UpdateBucketCORSOpt(req, cb) {
        return this.request("UpdateBucketCORSOpt", req, cb);
    }
    async DeleteFleet(req, cb) {
        return this.request("DeleteFleet", req, cb);
    }
    async UpdateFleetCapacity(req, cb) {
        return this.request("UpdateFleetCapacity", req, cb);
    }
    async DescribeFleetRelatedResources(req, cb) {
        return this.request("DescribeFleetRelatedResources", req, cb);
    }
    async DescribeRuntimeConfiguration(req, cb) {
        return this.request("DescribeRuntimeConfiguration", req, cb);
    }
    async UpdateAlias(req, cb) {
        return this.request("UpdateAlias", req, cb);
    }
    async DescribeGameServerSessionPlacement(req, cb) {
        return this.request("DescribeGameServerSessionPlacement", req, cb);
    }
    async DescribeGameServerSessionDetails(req, cb) {
        return this.request("DescribeGameServerSessionDetails", req, cb);
    }
    async CreateAsset(req, cb) {
        return this.request("CreateAsset", req, cb);
    }
    async SetServerReserved(req, cb) {
        return this.request("SetServerReserved", req, cb);
    }
    async CreateGameServerSessionQueue(req, cb) {
        return this.request("CreateGameServerSessionQueue", req, cb);
    }
    async DescribeInstanceLimit(req, cb) {
        return this.request("DescribeInstanceLimit", req, cb);
    }
    async DeleteAsset(req, cb) {
        return this.request("DeleteAsset", req, cb);
    }
    async ListFleets(req, cb) {
        return this.request("ListFleets", req, cb);
    }
    async GetGameServerSessionLogUrl(req, cb) {
        return this.request("GetGameServerSessionLogUrl", req, cb);
    }
    async UpdateRuntimeConfiguration(req, cb) {
        return this.request("UpdateRuntimeConfiguration", req, cb);
    }
    async DescribeFleetCapacity(req, cb) {
        return this.request("DescribeFleetCapacity", req, cb);
    }
    async StopGameServerSessionPlacement(req, cb) {
        return this.request("StopGameServerSessionPlacement", req, cb);
    }
    async UpdateBucketAccelerateOpt(req, cb) {
        return this.request("UpdateBucketAccelerateOpt", req, cb);
    }
    async DeleteGameServerSessionQueue(req, cb) {
        return this.request("DeleteGameServerSessionQueue", req, cb);
    }
    async DescribeGameServerSessionQueues(req, cb) {
        return this.request("DescribeGameServerSessionQueues", req, cb);
    }
    async DescribeCcnInstances(req, cb) {
        return this.request("DescribeCcnInstances", req, cb);
    }
    async PutScalingPolicy(req, cb) {
        return this.request("PutScalingPolicy", req, cb);
    }
    async DescribeScalingPolicies(req, cb) {
        return this.request("DescribeScalingPolicies", req, cb);
    }
    async CopyFleet(req, cb) {
        return this.request("CopyFleet", req, cb);
    }
    async DescribeGameServerSessions(req, cb) {
        return this.request("DescribeGameServerSessions", req, cb);
    }
    async StartGameServerSessionPlacement(req, cb) {
        return this.request("StartGameServerSessionPlacement", req, cb);
    }
    async JoinGameServerSession(req, cb) {
        return this.request("JoinGameServerSession", req, cb);
    }
    async JoinGameServerSessionBatch(req, cb) {
        return this.request("JoinGameServerSessionBatch", req, cb);
    }
    async DescribeFleetStatisticSummary(req, cb) {
        return this.request("DescribeFleetStatisticSummary", req, cb);
    }
    async ResolveAlias(req, cb) {
        return this.request("ResolveAlias", req, cb);
    }
    async DeleteAlias(req, cb) {
        return this.request("DeleteAlias", req, cb);
    }
    async DeleteTimerScalingPolicy(req, cb) {
        return this.request("DeleteTimerScalingPolicy", req, cb);
    }
    async UpdateAsset(req, cb) {
        return this.request("UpdateAsset", req, cb);
    }
    async StartFleetActions(req, cb) {
        return this.request("StartFleetActions", req, cb);
    }
    async DescribeFleetPortSettings(req, cb) {
        return this.request("DescribeFleetPortSettings", req, cb);
    }
    async GetUploadCredentials(req, cb) {
        return this.request("GetUploadCredentials", req, cb);
    }
    async AttachCcnInstances(req, cb) {
        return this.request("AttachCcnInstances", req, cb);
    }
    async DetachCcnInstances(req, cb) {
        return this.request("DetachCcnInstances", req, cb);
    }
    async DeleteScalingPolicy(req, cb) {
        return this.request("DeleteScalingPolicy", req, cb);
    }
    async CreateAlias(req, cb) {
        return this.request("CreateAlias", req, cb);
    }
    async DescribeFleetStatisticFlows(req, cb) {
        return this.request("DescribeFleetStatisticFlows", req, cb);
    }
    async CreateGameServerSession(req, cb) {
        return this.request("CreateGameServerSession", req, cb);
    }
    async DescribePlayerSessions(req, cb) {
        return this.request("DescribePlayerSessions", req, cb);
    }
    async DescribeAsset(req, cb) {
        return this.request("DescribeAsset", req, cb);
    }
    async DescribeAssetSystems(req, cb) {
        return this.request("DescribeAssetSystems", req, cb);
    }
    async CreateFleet(req, cb) {
        return this.request("CreateFleet", req, cb);
    }
    async DescribeTimerScalingPolicies(req, cb) {
        return this.request("DescribeTimerScalingPolicies", req, cb);
    }
    async UpdateGameServerSessionQueue(req, cb) {
        return this.request("UpdateGameServerSessionQueue", req, cb);
    }
    async GetInstanceAccess(req, cb) {
        return this.request("GetInstanceAccess", req, cb);
    }
    async UpdateFleetAttributes(req, cb) {
        return this.request("UpdateFleetAttributes", req, cb);
    }
    async DescribeUserQuota(req, cb) {
        return this.request("DescribeUserQuota", req, cb);
    }
    async DescribeFleetAttributes(req, cb) {
        return this.request("DescribeFleetAttributes", req, cb);
    }
    async UpdateGameServerSession(req, cb) {
        return this.request("UpdateGameServerSession", req, cb);
    }
    async GetUploadFederationToken(req, cb) {
        return this.request("GetUploadFederationToken", req, cb);
    }
    async GetGameServerInstanceLogUrl(req, cb) {
        return this.request("GetGameServerInstanceLogUrl", req, cb);
    }
    async SearchGameServerSessions(req, cb) {
        return this.request("SearchGameServerSessions", req, cb);
    }
    async DescribeFleetStatisticDetails(req, cb) {
        return this.request("DescribeFleetStatisticDetails", req, cb);
    }
    async DescribeAssets(req, cb) {
        return this.request("DescribeAssets", req, cb);
    }
    async CreateAssetWithImage(req, cb) {
        return this.request("CreateAssetWithImage", req, cb);
    }
    async StopFleetActions(req, cb) {
        return this.request("StopFleetActions", req, cb);
    }
    async DescribeInstancesExtend(req, cb) {
        return this.request("DescribeInstancesExtend", req, cb);
    }
    async DescribeAlias(req, cb) {
        return this.request("DescribeAlias", req, cb);
    }
    async ListAliases(req, cb) {
        return this.request("ListAliases", req, cb);
    }
    async UpdateFleetPortSettings(req, cb) {
        return this.request("UpdateFleetPortSettings", req, cb);
    }
    async DescribeUserQuotas(req, cb) {
        return this.request("DescribeUserQuotas", req, cb);
    }
    async DescribeInstanceTypes(req, cb) {
        return this.request("DescribeInstanceTypes", req, cb);
    }
    async DescribeFleetEvents(req, cb) {
        return this.request("DescribeFleetEvents", req, cb);
    }
    async SetServerWeight(req, cb) {
        return this.request("SetServerWeight", req, cb);
    }
    async UpdateFleetName(req, cb) {
        return this.request("UpdateFleetName", req, cb);
    }
    async DescribeFleetUtilization(req, cb) {
        return this.request("DescribeFleetUtilization", req, cb);
    }
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    async EndGameServerSessionAndProcess(req, cb) {
        return this.request("EndGameServerSessionAndProcess", req, cb);
    }
    async PutTimerScalingPolicy(req, cb) {
        return this.request("PutTimerScalingPolicy", req, cb);
    }
}
