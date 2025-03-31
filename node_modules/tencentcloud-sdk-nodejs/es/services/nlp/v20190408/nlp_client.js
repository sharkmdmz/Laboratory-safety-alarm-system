import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("nlp.tencentcloudapi.com", "2019-04-08", clientConfig);
    }
    async TextEmbellish(req, cb) {
        return this.request("TextEmbellish", req, cb);
    }
    async ClassifyContent(req, cb) {
        return this.request("ClassifyContent", req, cb);
    }
    async SentenceCorrection(req, cb) {
        return this.request("SentenceCorrection", req, cb);
    }
    async ComposePoetry(req, cb) {
        return this.request("ComposePoetry", req, cb);
    }
    async RetrieveSimilarWords(req, cb) {
        return this.request("RetrieveSimilarWords", req, cb);
    }
    async EvaluateSentenceSimilarity(req, cb) {
        return this.request("EvaluateSentenceSimilarity", req, cb);
    }
    async GenerateKeywordSentence(req, cb) {
        return this.request("GenerateKeywordSentence", req, cb);
    }
    async TextWriting(req, cb) {
        return this.request("TextWriting", req, cb);
    }
    async EvaluateWordSimilarity(req, cb) {
        return this.request("EvaluateWordSimilarity", req, cb);
    }
    async ComposeCouplet(req, cb) {
        return this.request("ComposeCouplet", req, cb);
    }
    async AnalyzeSentiment(req, cb) {
        return this.request("AnalyzeSentiment", req, cb);
    }
    async ParseWords(req, cb) {
        return this.request("ParseWords", req, cb);
    }
}
