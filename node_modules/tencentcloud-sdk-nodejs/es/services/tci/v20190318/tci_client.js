import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("tci.tencentcloudapi.com", "2019-03-18", clientConfig);
    }
    async SubmitOpenClassTask(req, cb) {
        return this.request("SubmitOpenClassTask", req, cb);
    }
    async SubmitCheckAttendanceTaskPlus(req, cb) {
        return this.request("SubmitCheckAttendanceTaskPlus", req, cb);
    }
    async CreateLibrary(req, cb) {
        return this.request("CreateLibrary", req, cb);
    }
    async SubmitAudioTask(req, cb) {
        return this.request("SubmitAudioTask", req, cb);
    }
    async CreateFace(req, cb) {
        return this.request("CreateFace", req, cb);
    }
    async ModifyPerson(req, cb) {
        return this.request("ModifyPerson", req, cb);
    }
    async DescribeImageTaskStatistic(req, cb) {
        return this.request("DescribeImageTaskStatistic", req, cb);
    }
    async AIAssistant(req, cb) {
        return this.request("AIAssistant", req, cb);
    }
    async ModifyLibrary(req, cb) {
        return this.request("ModifyLibrary", req, cb);
    }
    async SubmitDoubleVideoHighlights(req, cb) {
        return this.request("SubmitDoubleVideoHighlights", req, cb);
    }
    async DescribePersons(req, cb) {
        return this.request("DescribePersons", req, cb);
    }
    async SubmitConversationTask(req, cb) {
        return this.request("SubmitConversationTask", req, cb);
    }
    async DescribeHighlightResult(req, cb) {
        return this.request("DescribeHighlightResult", req, cb);
    }
    async SubmitTraditionalClassTask(req, cb) {
        return this.request("SubmitTraditionalClassTask", req, cb);
    }
    async DescribeAITaskResult(req, cb) {
        return this.request("DescribeAITaskResult", req, cb);
    }
    async DeletePerson(req, cb) {
        return this.request("DeletePerson", req, cb);
    }
    async DescribeLibraries(req, cb) {
        return this.request("DescribeLibraries", req, cb);
    }
    async CancelTask(req, cb) {
        return this.request("CancelTask", req, cb);
    }
    async SubmitHighlights(req, cb) {
        return this.request("SubmitHighlights", req, cb);
    }
    async DescribeVocabLib(req, cb) {
        return this.request("DescribeVocabLib", req, cb);
    }
    async CreateVocab(req, cb) {
        return this.request("CreateVocab", req, cb);
    }
    async SubmitOneByOneClassTask(req, cb) {
        return this.request("SubmitOneByOneClassTask", req, cb);
    }
    async SubmitPartialBodyClassTask(req, cb) {
        return this.request("SubmitPartialBodyClassTask", req, cb);
    }
    async SubmitCheckAttendanceTask(req, cb) {
        return this.request("SubmitCheckAttendanceTask", req, cb);
    }
    async CreatePerson(req, cb) {
        return this.request("CreatePerson", req, cb);
    }
    async DescribeConversationTask(req, cb) {
        return this.request("DescribeConversationTask", req, cb);
    }
    async DeleteLibrary(req, cb) {
        return this.request("DeleteLibrary", req, cb);
    }
    async DescribeImageTask(req, cb) {
        return this.request("DescribeImageTask", req, cb);
    }
    async SubmitImageTask(req, cb) {
        return this.request("SubmitImageTask", req, cb);
    }
    async DescribeAttendanceResult(req, cb) {
        return this.request("DescribeAttendanceResult", req, cb);
    }
    async SubmitImageTaskPlus(req, cb) {
        return this.request("SubmitImageTaskPlus", req, cb);
    }
    async CreateVocabLib(req, cb) {
        return this.request("CreateVocabLib", req, cb);
    }
    async DeleteVocab(req, cb) {
        return this.request("DeleteVocab", req, cb);
    }
    async SubmitFullBodyClassTask(req, cb) {
        return this.request("SubmitFullBodyClassTask", req, cb);
    }
    async CheckFacePhoto(req, cb) {
        return this.request("CheckFacePhoto", req, cb);
    }
    async DescribeVocab(req, cb) {
        return this.request("DescribeVocab", req, cb);
    }
    async DeleteVocabLib(req, cb) {
        return this.request("DeleteVocabLib", req, cb);
    }
    async DescribePerson(req, cb) {
        return this.request("DescribePerson", req, cb);
    }
    async DeleteFace(req, cb) {
        return this.request("DeleteFace", req, cb);
    }
    async DescribeAudioTask(req, cb) {
        return this.request("DescribeAudioTask", req, cb);
    }
    async TransmitAudioStream(req, cb) {
        return this.request("TransmitAudioStream", req, cb);
    }
}
