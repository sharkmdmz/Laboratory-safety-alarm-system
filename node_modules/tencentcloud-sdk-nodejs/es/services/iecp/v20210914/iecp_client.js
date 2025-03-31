import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("iecp.tencentcloudapi.com", "2021-09-14", clientConfig);
    }
    async DescribeEdgeUnitMonitorStatus(req, cb) {
        return this.request("DescribeEdgeUnitMonitorStatus", req, cb);
    }
    async DeleteEdgeNodeGroup(req, cb) {
        return this.request("DeleteEdgeNodeGroup", req, cb);
    }
    async CreateIotDevice(req, cb) {
        return this.request("CreateIotDevice", req, cb);
    }
    async DeleteIotDevice(req, cb) {
        return this.request("DeleteIotDevice", req, cb);
    }
    async DescribeEdgeAgentNodeInstaller(req, cb) {
        return this.request("DescribeEdgeAgentNodeInstaller", req, cb);
    }
    async DescribeEdgeUnitExtra(req, cb) {
        return this.request("DescribeEdgeUnitExtra", req, cb);
    }
    async DescribeNamespaceResources(req, cb) {
        return this.request("DescribeNamespaceResources", req, cb);
    }
    async CreateUserToken(req, cb) {
        return this.request("CreateUserToken", req, cb);
    }
    async DeleteEdgeNodes(req, cb) {
        return this.request("DeleteEdgeNodes", req, cb);
    }
    async CreateUpdateNodeUnit(req, cb) {
        return this.request("CreateUpdateNodeUnit", req, cb);
    }
    async ModifyNodeUnitTemplate(req, cb) {
        return this.request("ModifyNodeUnitTemplate", req, cb);
    }
    async DescribeEdgeUnitNodeUnitTemplates(req, cb) {
        return this.request("DescribeEdgeUnitNodeUnitTemplates", req, cb);
    }
    async CreateNamespace(req, cb) {
        return this.request("CreateNamespace", req, cb);
    }
    async DescribeDracoEdgeNodeInstaller(req, cb) {
        return this.request("DescribeDracoEdgeNodeInstaller", req, cb);
    }
    async RedeployEdgeUnitApplication(req, cb) {
        return this.request("RedeployEdgeUnitApplication", req, cb);
    }
    async DescribeEdgeNode(req, cb) {
        return this.request("DescribeEdgeNode", req, cb);
    }
    async DescribeEdgeNodeRemarkList(req, cb) {
        return this.request("DescribeEdgeNodeRemarkList", req, cb);
    }
    async CreateEdgeUnitCloud(req, cb) {
        return this.request("CreateEdgeUnitCloud", req, cb);
    }
    async DescribeMonitorMetrics(req, cb) {
        return this.request("DescribeMonitorMetrics", req, cb);
    }
    async DeleteNamespace(req, cb) {
        return this.request("DeleteNamespace", req, cb);
    }
    async BuildMessageRoute(req, cb) {
        return this.request("BuildMessageRoute", req, cb);
    }
    async DescribeSecrets(req, cb) {
        return this.request("DescribeSecrets", req, cb);
    }
    async SetRouteOnOff(req, cb) {
        return this.request("SetRouteOnOff", req, cb);
    }
    async CreateConfigMap(req, cb) {
        return this.request("CreateConfigMap", req, cb);
    }
    async CreateEdgeNode(req, cb) {
        return this.request("CreateEdgeNode", req, cb);
    }
    async DeleteEdgeNodeUnitTemplates(req, cb) {
        return this.request("DeleteEdgeNodeUnitTemplates", req, cb);
    }
    async ModifyEdgeNodeLabels(req, cb) {
        return this.request("ModifyEdgeNodeLabels", req, cb);
    }
    async DescribeEdgeUnitDeployGridItemYaml(req, cb) {
        return this.request("DescribeEdgeUnitDeployGridItemYaml", req, cb);
    }
    async DescribeConfigMaps(req, cb) {
        return this.request("DescribeConfigMaps", req, cb);
    }
    async GetMarketComponentList(req, cb) {
        return this.request("GetMarketComponentList", req, cb);
    }
    async DeleteEdgeUnitDeployGridItem(req, cb) {
        return this.request("DeleteEdgeUnitDeployGridItem", req, cb);
    }
    async DescribeConfigMap(req, cb) {
        return this.request("DescribeConfigMap", req, cb);
    }
    async DeleteMessageRoute(req, cb) {
        return this.request("DeleteMessageRoute", req, cb);
    }
    async ModifyEdgeUnit(req, cb) {
        return this.request("ModifyEdgeUnit", req, cb);
    }
    async ModifyConfigMap(req, cb) {
        return this.request("ModifyConfigMap", req, cb);
    }
    async DescribeNodeUnit(req, cb) {
        return this.request("DescribeNodeUnit", req, cb);
    }
    async DescribeEdgeUnitDeployGridItem(req, cb) {
        return this.request("DescribeEdgeUnitDeployGridItem", req, cb);
    }
    async ModifyEdgeDracoNode(req, cb) {
        return this.request("ModifyEdgeDracoNode", req, cb);
    }
    async ModifyIotDevice(req, cb) {
        return this.request("ModifyIotDevice", req, cb);
    }
    async ModifyEdgeUnitApplicationBasicInfo(req, cb) {
        return this.request("ModifyEdgeUnitApplicationBasicInfo", req, cb);
    }
    async GetMarketComponent(req, cb) {
        return this.request("GetMarketComponent", req, cb);
    }
    async DescribeEdgeUnitGridPods(req, cb) {
        return this.request("DescribeEdgeUnitGridPods", req, cb);
    }
    async DeleteIotDeviceBatch(req, cb) {
        return this.request("DeleteIotDeviceBatch", req, cb);
    }
    async DescribeNamespace(req, cb) {
        return this.request("DescribeNamespace", req, cb);
    }
    async DescribeEdgeDefaultVpc(req, cb) {
        return this.request("DescribeEdgeDefaultVpc", req, cb);
    }
    async DescribeSecretYamlError(req, cb) {
        return this.request("DescribeSecretYamlError", req, cb);
    }
    async DeleteConfigMap(req, cb) {
        return this.request("DeleteConfigMap", req, cb);
    }
    async CreateEdgeNodeUnitTemplate(req, cb) {
        return this.request("CreateEdgeNodeUnitTemplate", req, cb);
    }
    async DeleteEdgeUnitDevices(req, cb) {
        return this.request("DeleteEdgeUnitDevices", req, cb);
    }
    async ModifySecret(req, cb) {
        return this.request("ModifySecret", req, cb);
    }
    async CreateEdgeUnitDevices(req, cb) {
        return this.request("CreateEdgeUnitDevices", req, cb);
    }
    async DescribeIotDevices(req, cb) {
        return this.request("DescribeIotDevices", req, cb);
    }
    async DeleteEdgeUnitCloud(req, cb) {
        return this.request("DeleteEdgeUnitCloud", req, cb);
    }
    async DescribeNodeUnitTemplateOnNodeGroup(req, cb) {
        return this.request("DescribeNodeUnitTemplateOnNodeGroup", req, cb);
    }
    async DescribeEdgeNodePodContainers(req, cb) {
        return this.request("DescribeEdgeNodePodContainers", req, cb);
    }
    async DescribeMessageRouteList(req, cb) {
        return this.request("DescribeMessageRouteList", req, cb);
    }
    async DescribeConfigMapYamlError(req, cb) {
        return this.request("DescribeConfigMapYamlError", req, cb);
    }
    async DescribeEdgeUnitApplications(req, cb) {
        return this.request("DescribeEdgeUnitApplications", req, cb);
    }
    async DescribeNamespaces(req, cb) {
        return this.request("DescribeNamespaces", req, cb);
    }
    async DescribeEdgeNodes(req, cb) {
        return this.request("DescribeEdgeNodes", req, cb);
    }
    async DescribeEdgeOperationLogs(req, cb) {
        return this.request("DescribeEdgeOperationLogs", req, cb);
    }
    async CreateSecret(req, cb) {
        return this.request("CreateSecret", req, cb);
    }
    async DescribeEdgeUnitNodeGroup(req, cb) {
        return this.request("DescribeEdgeUnitNodeGroup", req, cb);
    }
    async DescribeEdgePod(req, cb) {
        return this.request("DescribeEdgePod", req, cb);
    }
    async DescribeSecret(req, cb) {
        return this.request("DescribeSecret", req, cb);
    }
    async ModifyEdgeUnitCloudApi(req, cb) {
        return this.request("ModifyEdgeUnitCloudApi", req, cb);
    }
    async DescribeIotDevice(req, cb) {
        return this.request("DescribeIotDevice", req, cb);
    }
    async CreateEdgeNodeGroup(req, cb) {
        return this.request("CreateEdgeNodeGroup", req, cb);
    }
    async DescribeEdgeNodePods(req, cb) {
        return this.request("DescribeEdgeNodePods", req, cb);
    }
    async CreateEdgeNodeBatch(req, cb) {
        return this.request("CreateEdgeNodeBatch", req, cb);
    }
    async ModifyEdgeUnitDeployGridItem(req, cb) {
        return this.request("ModifyEdgeUnitDeployGridItem", req, cb);
    }
    async CreateMessageRoute(req, cb) {
        return this.request("CreateMessageRoute", req, cb);
    }
    async DescribeYeheResourceLimit(req, cb) {
        return this.request("DescribeYeheResourceLimit", req, cb);
    }
    async DeleteNodeUnit(req, cb) {
        return this.request("DeleteNodeUnit", req, cb);
    }
    async ModifyEdgeUnitApplicationYaml(req, cb) {
        return this.request("ModifyEdgeUnitApplicationYaml", req, cb);
    }
    async DeleteEdgeUnitPod(req, cb) {
        return this.request("DeleteEdgeUnitPod", req, cb);
    }
    async DescribeEdgeUnitDeployGrid(req, cb) {
        return this.request("DescribeEdgeUnitDeployGrid", req, cb);
    }
    async DescribeEdgeUnitGridEvents(req, cb) {
        return this.request("DescribeEdgeUnitGridEvents", req, cb);
    }
    async ModifyEdgeUnitApplicationVisualization(req, cb) {
        return this.request("ModifyEdgeUnitApplicationVisualization", req, cb);
    }
    async DescribeEdgeSnNodes(req, cb) {
        return this.request("DescribeEdgeSnNodes", req, cb);
    }
    async DeleteSecret(req, cb) {
        return this.request("DeleteSecret", req, cb);
    }
    async DescribeEdgeUnitsCloud(req, cb) {
        return this.request("DescribeEdgeUnitsCloud", req, cb);
    }
}
