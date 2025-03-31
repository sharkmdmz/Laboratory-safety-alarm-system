import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("hunyuan.tencentcloudapi.com", "2023-09-01", clientConfig);
    }
    async SetPayMode(req, cb) {
        return this.request("SetPayMode", req, cb);
    }
    async FilesList(req, cb) {
        return this.request("FilesList", req, cb);
    }
    async GetThread(req, cb) {
        return this.request("GetThread", req, cb);
    }
    async SubmitHunyuanImageChatJob(req, cb) {
        return this.request("SubmitHunyuanImageChatJob", req, cb);
    }
    async CreateThread(req, cb) {
        return this.request("CreateThread", req, cb);
    }
    async GetTokenCount(req, cb) {
        return this.request("GetTokenCount", req, cb);
    }
    async QueryHunyuanImageJob(req, cb) {
        return this.request("QueryHunyuanImageJob", req, cb);
    }
    async SubmitHunyuanImageJob(req, cb) {
        return this.request("SubmitHunyuanImageJob", req, cb);
    }
    async FilesDeletions(req, cb) {
        return this.request("FilesDeletions", req, cb);
    }
    async GetThreadMessageList(req, cb) {
        return this.request("GetThreadMessageList", req, cb);
    }
    async GroupChatCompletions(req, cb) {
        return this.request("GroupChatCompletions", req, cb);
    }
    async GetThreadMessage(req, cb) {
        return this.request("GetThreadMessage", req, cb);
    }
    async RunThread(req, cb) {
        return this.request("RunThread", req, cb);
    }
    async ChatCompletions(req, cb) {
        return this.request("ChatCompletions", req, cb);
    }
    async QueryHunyuanImageChatJob(req, cb) {
        return this.request("QueryHunyuanImageChatJob", req, cb);
    }
    async ChatTranslations(req, cb) {
        return this.request("ChatTranslations", req, cb);
    }
    async GetEmbedding(req, cb) {
        return this.request("GetEmbedding", req, cb);
    }
    async FilesUploads(req, cb) {
        return this.request("FilesUploads", req, cb);
    }
    async TextToImageLite(req, cb) {
        return this.request("TextToImageLite", req, cb);
    }
    async ActivateService(req, cb) {
        return this.request("ActivateService", req, cb);
    }
}
