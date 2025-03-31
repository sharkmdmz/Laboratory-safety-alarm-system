import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("lowcode.tencentcloudapi.com", "2021-01-08", clientConfig);
    }
    async CreateKnowledgeSet(req, cb) {
        return this.request("CreateKnowledgeSet", req, cb);
    }
    async UpdateKnowledgeSet(req, cb) {
        return this.request("UpdateKnowledgeSet", req, cb);
    }
    async SearchDocList(req, cb) {
        return this.request("SearchDocList", req, cb);
    }
    async DescribeKnowledgeSetList(req, cb) {
        return this.request("DescribeKnowledgeSetList", req, cb);
    }
    async DescribeDataSourceList(req, cb) {
        return this.request("DescribeDataSourceList", req, cb);
    }
    async DeleteKnowledgeDocumentSet(req, cb) {
        return this.request("DeleteKnowledgeDocumentSet", req, cb);
    }
    async DescribeKnowledgeDocumentSetDetail(req, cb) {
        return this.request("DescribeKnowledgeDocumentSetDetail", req, cb);
    }
    async UploadKnowledgeDocumentSet(req, cb) {
        return this.request("UploadKnowledgeDocumentSet", req, cb);
    }
    async DescribeKnowledgeDocumentSetList(req, cb) {
        return this.request("DescribeKnowledgeDocumentSetList", req, cb);
    }
    async DeleteKnowledgeSet(req, cb) {
        return this.request("DeleteKnowledgeSet", req, cb);
    }
}
