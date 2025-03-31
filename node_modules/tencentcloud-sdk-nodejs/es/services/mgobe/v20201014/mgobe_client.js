import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("mgobe.tencentcloudapi.com", "2020-10-14", clientConfig);
    }
    async DescribePlayer(req, cb) {
        return this.request("DescribePlayer", req, cb);
    }
    async ChangeRoomPlayerStatus(req, cb) {
        return this.request("ChangeRoomPlayerStatus", req, cb);
    }
    async ModifyRoom(req, cb) {
        return this.request("ModifyRoom", req, cb);
    }
    async RemoveRoomPlayer(req, cb) {
        return this.request("RemoveRoomPlayer", req, cb);
    }
    async DescribeRoom(req, cb) {
        return this.request("DescribeRoom", req, cb);
    }
    async ChangeRoomPlayerProfile(req, cb) {
        return this.request("ChangeRoomPlayerProfile", req, cb);
    }
    async DismissRoom(req, cb) {
        return this.request("DismissRoom", req, cb);
    }
}
