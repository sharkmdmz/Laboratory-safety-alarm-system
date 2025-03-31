import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("trocket.tencentcloudapi.com", "2023-03-08", clientConfig);
    }
    async DescribeMQTTMessageList(req, cb) {
        return this.request("DescribeMQTTMessageList", req, cb);
    }
    async ModifyMQTTInstanceCertBinding(req, cb) {
        return this.request("ModifyMQTTInstanceCertBinding", req, cb);
    }
    async DescribeMessageTrace(req, cb) {
        return this.request("DescribeMessageTrace", req, cb);
    }
    async ModifyTopic(req, cb) {
        return this.request("ModifyTopic", req, cb);
    }
    async DescribeTopicListByGroup(req, cb) {
        return this.request("DescribeTopicListByGroup", req, cb);
    }
    async ModifyMQTTTopic(req, cb) {
        return this.request("ModifyMQTTTopic", req, cb);
    }
    async ResendDeadLetterMessage(req, cb) {
        return this.request("ResendDeadLetterMessage", req, cb);
    }
    async DeleteMQTTUser(req, cb) {
        return this.request("DeleteMQTTUser", req, cb);
    }
    async CreateRole(req, cb) {
        return this.request("CreateRole", req, cb);
    }
    async ImportSourceClusterConsumerGroups(req, cb) {
        return this.request("ImportSourceClusterConsumerGroups", req, cb);
    }
    async DeleteInstance(req, cb) {
        return this.request("DeleteInstance", req, cb);
    }
    async CreateConsumerGroup(req, cb) {
        return this.request("CreateConsumerGroup", req, cb);
    }
    async DescribeMQTTProductSKUList(req, cb) {
        return this.request("DescribeMQTTProductSKUList", req, cb);
    }
    async ImportSourceClusterTopics(req, cb) {
        return this.request("ImportSourceClusterTopics", req, cb);
    }
    async DescribeMessage(req, cb) {
        return this.request("DescribeMessage", req, cb);
    }
    async DescribeMQTTUserList(req, cb) {
        return this.request("DescribeMQTTUserList", req, cb);
    }
    async DeleteMQTTInsPublicEndpoint(req, cb) {
        return this.request("DeleteMQTTInsPublicEndpoint", req, cb);
    }
    async DescribeRoleList(req, cb) {
        return this.request("DescribeRoleList", req, cb);
    }
    async ModifyMQTTUser(req, cb) {
        return this.request("ModifyMQTTUser", req, cb);
    }
    async DeleteConsumerGroup(req, cb) {
        return this.request("DeleteConsumerGroup", req, cb);
    }
    async DescribeProductSKUs(req, cb) {
        return this.request("DescribeProductSKUs", req, cb);
    }
    async ModifyConsumerGroup(req, cb) {
        return this.request("ModifyConsumerGroup", req, cb);
    }
    async DescribeMQTTInsVPCEndpoints(req, cb) {
        return this.request("DescribeMQTTInsVPCEndpoints", req, cb);
    }
    async DescribeConsumerClient(req, cb) {
        return this.request("DescribeConsumerClient", req, cb);
    }
    async DeleteRole(req, cb) {
        return this.request("DeleteRole", req, cb);
    }
    async DeleteMQTTInstance(req, cb) {
        return this.request("DeleteMQTTInstance", req, cb);
    }
    async DescribeMQTTMessage(req, cb) {
        return this.request("DescribeMQTTMessage", req, cb);
    }
    async DescribeConsumerLag(req, cb) {
        return this.request("DescribeConsumerLag", req, cb);
    }
    async DescribeMQTTTopic(req, cb) {
        return this.request("DescribeMQTTTopic", req, cb);
    }
    async ModifyMQTTInsPublicEndpoint(req, cb) {
        return this.request("ModifyMQTTInsPublicEndpoint", req, cb);
    }
    async DescribeConsumerGroup(req, cb) {
        return this.request("DescribeConsumerGroup", req, cb);
    }
    async CreateTopic(req, cb) {
        return this.request("CreateTopic", req, cb);
    }
    async DescribeMessageList(req, cb) {
        return this.request("DescribeMessageList", req, cb);
    }
    async ResetConsumerGroupOffset(req, cb) {
        return this.request("ResetConsumerGroupOffset", req, cb);
    }
    async DescribeMQTTTopicList(req, cb) {
        return this.request("DescribeMQTTTopicList", req, cb);
    }
    async DescribeMQTTInstance(req, cb) {
        return this.request("DescribeMQTTInstance", req, cb);
    }
    async CreateMQTTTopic(req, cb) {
        return this.request("CreateMQTTTopic", req, cb);
    }
    async CreateInstance(req, cb) {
        return this.request("CreateInstance", req, cb);
    }
    async DeleteMQTTTopic(req, cb) {
        return this.request("DeleteMQTTTopic", req, cb);
    }
    async DescribeInstance(req, cb) {
        return this.request("DescribeInstance", req, cb);
    }
    async ModifyInstanceEndpoint(req, cb) {
        return this.request("ModifyInstanceEndpoint", req, cb);
    }
    async DescribeTopicList(req, cb) {
        return this.request("DescribeTopicList", req, cb);
    }
    async DescribeMQTTInsPublicEndpoints(req, cb) {
        return this.request("DescribeMQTTInsPublicEndpoints", req, cb);
    }
    async DescribeMQTTInstanceCert(req, cb) {
        return this.request("DescribeMQTTInstanceCert", req, cb);
    }
    async ModifyMQTTInstance(req, cb) {
        return this.request("ModifyMQTTInstance", req, cb);
    }
    async DescribeMQTTInstanceList(req, cb) {
        return this.request("DescribeMQTTInstanceList", req, cb);
    }
    async DescribeConsumerGroupList(req, cb) {
        return this.request("DescribeConsumerGroupList", req, cb);
    }
    async CreateMQTTInstance(req, cb) {
        return this.request("CreateMQTTInstance", req, cb);
    }
    async DescribeInstanceList(req, cb) {
        return this.request("DescribeInstanceList", req, cb);
    }
    async DescribeFusionInstanceList(req, cb) {
        return this.request("DescribeFusionInstanceList", req, cb);
    }
    async CreateMQTTUser(req, cb) {
        return this.request("CreateMQTTUser", req, cb);
    }
    async ModifyRole(req, cb) {
        return this.request("ModifyRole", req, cb);
    }
    async DescribeMQTTClient(req, cb) {
        return this.request("DescribeMQTTClient", req, cb);
    }
    async DescribeTopic(req, cb) {
        return this.request("DescribeTopic", req, cb);
    }
    async ModifyInstance(req, cb) {
        return this.request("ModifyInstance", req, cb);
    }
    async DeleteTopic(req, cb) {
        return this.request("DeleteTopic", req, cb);
    }
    async CreateMQTTInsPublicEndpoint(req, cb) {
        return this.request("CreateMQTTInsPublicEndpoint", req, cb);
    }
}
