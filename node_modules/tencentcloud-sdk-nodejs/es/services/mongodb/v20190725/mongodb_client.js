import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("mongodb.tencentcloudapi.com", "2019-07-25", clientConfig);
    }
    async TerminateDBInstances(req, cb) {
        return this.request("TerminateDBInstances", req, cb);
    }
    async DescribeDBInstanceURL(req, cb) {
        return this.request("DescribeDBInstanceURL", req, cb);
    }
    async DescribeDBInstanceNodeProperty(req, cb) {
        return this.request("DescribeDBInstanceNodeProperty", req, cb);
    }
    async DescribeDBInstanceParamTpl(req, cb) {
        return this.request("DescribeDBInstanceParamTpl", req, cb);
    }
    async DescribeDBInstanceDeal(req, cb) {
        return this.request("DescribeDBInstanceDeal", req, cb);
    }
    async DescribeCurrentOp(req, cb) {
        return this.request("DescribeCurrentOp", req, cb);
    }
    async DescribeClientConnections(req, cb) {
        return this.request("DescribeClientConnections", req, cb);
    }
    async ResetDBInstancePassword(req, cb) {
        return this.request("ResetDBInstancePassword", req, cb);
    }
    async DescribeSecurityGroup(req, cb) {
        return this.request("DescribeSecurityGroup", req, cb);
    }
    async SetAccountUserPrivilege(req, cb) {
        return this.request("SetAccountUserPrivilege", req, cb);
    }
    async FlushInstanceRouterConfig(req, cb) {
        return this.request("FlushInstanceRouterConfig", req, cb);
    }
    async DescribeDBBackups(req, cb) {
        return this.request("DescribeDBBackups", req, cb);
    }
    async IsolateDBInstance(req, cb) {
        return this.request("IsolateDBInstance", req, cb);
    }
    async SetBackupRules(req, cb) {
        return this.request("SetBackupRules", req, cb);
    }
    async InquirePriceModifyDBInstanceSpec(req, cb) {
        return this.request("InquirePriceModifyDBInstanceSpec", req, cb);
    }
    async RestartNodes(req, cb) {
        return this.request("RestartNodes", req, cb);
    }
    async DescribeBackupRules(req, cb) {
        return this.request("DescribeBackupRules", req, cb);
    }
    async RenameInstance(req, cb) {
        return this.request("RenameInstance", req, cb);
    }
    async DescribeAsyncRequestInfo(req, cb) {
        return this.request("DescribeAsyncRequestInfo", req, cb);
    }
    async CreateAccountUser(req, cb) {
        return this.request("CreateAccountUser", req, cb);
    }
    async OfflineIsolatedDBInstance(req, cb) {
        return this.request("OfflineIsolatedDBInstance", req, cb);
    }
    async ModifyDBInstanceParamTpl(req, cb) {
        return this.request("ModifyDBInstanceParamTpl", req, cb);
    }
    async CreateDBInstanceHour(req, cb) {
        return this.request("CreateDBInstanceHour", req, cb);
    }
    async CreateDBInstanceParamTpl(req, cb) {
        return this.request("CreateDBInstanceParamTpl", req, cb);
    }
    async DropDBInstanceParamTpl(req, cb) {
        return this.request("DropDBInstanceParamTpl", req, cb);
    }
    async RenewDBInstances(req, cb) {
        return this.request("RenewDBInstances", req, cb);
    }
    async CreateBackupDownloadTask(req, cb) {
        return this.request("CreateBackupDownloadTask", req, cb);
    }
    async FlashBackDBInstance(req, cb) {
        return this.request("FlashBackDBInstance", req, cb);
    }
    async DescribeDBInstances(req, cb) {
        return this.request("DescribeDBInstances", req, cb);
    }
    async DescribeDBInstanceNamespace(req, cb) {
        return this.request("DescribeDBInstanceNamespace", req, cb);
    }
    async DescribeSlowLogPatterns(req, cb) {
        return this.request("DescribeSlowLogPatterns", req, cb);
    }
    async DescribeSlowLogs(req, cb) {
        return this.request("DescribeSlowLogs", req, cb);
    }
    async ModifyDBInstanceNetworkAddress(req, cb) {
        return this.request("ModifyDBInstanceNetworkAddress", req, cb);
    }
    async CreateDBInstance(req, cb) {
        return this.request("CreateDBInstance", req, cb);
    }
    async ModifyDBInstanceSpec(req, cb) {
        return this.request("ModifyDBInstanceSpec", req, cb);
    }
    async DescribeInstanceParams(req, cb) {
        return this.request("DescribeInstanceParams", req, cb);
    }
    async DescribeSpecInfo(req, cb) {
        return this.request("DescribeSpecInfo", req, cb);
    }
    async DescribeBackupDownloadTask(req, cb) {
        return this.request("DescribeBackupDownloadTask", req, cb);
    }
    async InquirePriceCreateDBInstances(req, cb) {
        return this.request("InquirePriceCreateDBInstances", req, cb);
    }
    async AssignProject(req, cb) {
        return this.request("AssignProject", req, cb);
    }
    async DescribeTransparentDataEncryptionStatus(req, cb) {
        return this.request("DescribeTransparentDataEncryptionStatus", req, cb);
    }
    async DescribeAccountUsers(req, cb) {
        return this.request("DescribeAccountUsers", req, cb);
    }
    async SetInstanceMaintenance(req, cb) {
        return this.request("SetInstanceMaintenance", req, cb);
    }
    async ModifyInstanceParams(req, cb) {
        return this.request("ModifyInstanceParams", req, cb);
    }
    async DescribeDBInstanceParamTplDetail(req, cb) {
        return this.request("DescribeDBInstanceParamTplDetail", req, cb);
    }
    async KillOps(req, cb) {
        return this.request("KillOps", req, cb);
    }
    async EnableTransparentDataEncryption(req, cb) {
        return this.request("EnableTransparentDataEncryption", req, cb);
    }
    async CreateBackupDBInstance(req, cb) {
        return this.request("CreateBackupDBInstance", req, cb);
    }
    async InquirePriceRenewDBInstances(req, cb) {
        return this.request("InquirePriceRenewDBInstances", req, cb);
    }
    async DeleteAccountUser(req, cb) {
        return this.request("DeleteAccountUser", req, cb);
    }
    async ModifyDBInstanceSecurityGroup(req, cb) {
        return this.request("ModifyDBInstanceSecurityGroup", req, cb);
    }
}
