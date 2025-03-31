import { AbstractClient } from "../../../common/abstract_client";
export class Client extends AbstractClient {
    constructor(clientConfig) {
        super("billing.tencentcloudapi.com", "2018-07-09", clientConfig);
    }
    async DescribeBillDetailForOrganization(req, cb) {
        return this.request("DescribeBillDetailForOrganization", req, cb);
    }
    async DescribeCostSummaryByResource(req, cb) {
        return this.request("DescribeCostSummaryByResource", req, cb);
    }
    async DescribeBillList(req, cb) {
        return this.request("DescribeBillList", req, cb);
    }
    async DescribeSavingPlanCoverage(req, cb) {
        return this.request("DescribeSavingPlanCoverage", req, cb);
    }
    async DescribeAllocationSummaryByResource(req, cb) {
        return this.request("DescribeAllocationSummaryByResource", req, cb);
    }
    async DescribeBillResourceSummary(req, cb) {
        return this.request("DescribeBillResourceSummary", req, cb);
    }
    async DescribeAllocationSummaryByBusiness(req, cb) {
        return this.request("DescribeAllocationSummaryByBusiness", req, cb);
    }
    async DescribeAllocateConditions(req, cb) {
        return this.request("DescribeAllocateConditions", req, cb);
    }
    async DescribeAllocationOverview(req, cb) {
        return this.request("DescribeAllocationOverview", req, cb);
    }
    async DescribeDosageDetailList(req, cb) {
        return this.request("DescribeDosageDetailList", req, cb);
    }
    async CreateAllocationTag(req, cb) {
        return this.request("CreateAllocationTag", req, cb);
    }
    async DescribeVoucherInfo(req, cb) {
        return this.request("DescribeVoucherInfo", req, cb);
    }
    async DescribeCostSummaryByProject(req, cb) {
        return this.request("DescribeCostSummaryByProject", req, cb);
    }
    async DescribeCostExplorerSummary(req, cb) {
        return this.request("DescribeCostExplorerSummary", req, cb);
    }
    async DescribeBillResourceSummaryForOrganization(req, cb) {
        return this.request("DescribeBillResourceSummaryForOrganization", req, cb);
    }
    async DescribeBillDetail(req, cb) {
        return this.request("DescribeBillDetail", req, cb);
    }
    async DescribeBillSummary(req, cb) {
        return this.request("DescribeBillSummary", req, cb);
    }
    async DescribeBillSummaryByPayMode(req, cb) {
        return this.request("DescribeBillSummaryByPayMode", req, cb);
    }
    async DescribeCostSummaryByRegion(req, cb) {
        return this.request("DescribeCostSummaryByRegion", req, cb);
    }
    async DescribeAllocationTrendByMonth(req, cb) {
        return this.request("DescribeAllocationTrendByMonth", req, cb);
    }
    async DescribeBillDownloadUrl(req, cb) {
        return this.request("DescribeBillDownloadUrl", req, cb);
    }
    async DescribeDosageCosDetailByDate(req, cb) {
        return this.request("DescribeDosageCosDetailByDate", req, cb);
    }
    async DescribeAllocationBillConditions(req, cb) {
        return this.request("DescribeAllocationBillConditions", req, cb);
    }
    async DescribeAccountBalance(req, cb) {
        return this.request("DescribeAccountBalance", req, cb);
    }
    async DescribeDosageDetailByDate(req, cb) {
        return this.request("DescribeDosageDetailByDate", req, cb);
    }
    async DescribeBillAdjustInfo(req, cb) {
        return this.request("DescribeBillAdjustInfo", req, cb);
    }
    async DescribeAllocationBillDetail(req, cb) {
        return this.request("DescribeAllocationBillDetail", req, cb);
    }
    async DescribeBillSummaryByRegion(req, cb) {
        return this.request("DescribeBillSummaryByRegion", req, cb);
    }
    async DescribeBillSummaryByProject(req, cb) {
        return this.request("DescribeBillSummaryByProject", req, cb);
    }
    async DescribeAllocationMonthOverview(req, cb) {
        return this.request("DescribeAllocationMonthOverview", req, cb);
    }
    async DescribeBillSummaryByTag(req, cb) {
        return this.request("DescribeBillSummaryByTag", req, cb);
    }
    async DescribeBillSummaryForOrganization(req, cb) {
        return this.request("DescribeBillSummaryForOrganization", req, cb);
    }
    async DescribeGatherResource(req, cb) {
        return this.request("DescribeGatherResource", req, cb);
    }
    async DescribeSavingPlanResourceInfo(req, cb) {
        return this.request("DescribeSavingPlanResourceInfo", req, cb);
    }
    async DescribeTagList(req, cb) {
        return this.request("DescribeTagList", req, cb);
    }
    async DescribeVoucherUsageDetails(req, cb) {
        return this.request("DescribeVoucherUsageDetails", req, cb);
    }
    async PayDeals(req, cb) {
        return this.request("PayDeals", req, cb);
    }
    async DescribeCostSummaryByProduct(req, cb) {
        return this.request("DescribeCostSummaryByProduct", req, cb);
    }
    async DeleteAllocationTag(req, cb) {
        return this.request("DeleteAllocationTag", req, cb);
    }
    async DescribeDealsByCond(req, cb) {
        return this.request("DescribeDealsByCond", req, cb);
    }
    async DescribeAllocationSummaryByItem(req, cb) {
        return this.request("DescribeAllocationSummaryByItem", req, cb);
    }
    async DescribeBillSummaryByProduct(req, cb) {
        return this.request("DescribeBillSummaryByProduct", req, cb);
    }
    async DescribeCostDetail(req, cb) {
        return this.request("DescribeCostDetail", req, cb);
    }
}
