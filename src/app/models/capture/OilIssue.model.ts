export default class OilIssue {
  OilIssueGuid: string;
  OilIssueDate: string;
  CaptureDate: string = new Date().toString();
  VoucherNo: string;
  ItemGuid: string;
  ItemCompGuid: string;
  MeterRead: number;
  OilQty: number;
  OilStoreGuid: string;
  OilTypeGuid: string;
  OilTotalCost: number;
  Supplier: string;
  SupplierGuid: string;
  Trans: string;
  MeterDiff: number;
  CaptureName: string;
  RegIndex: string;
  Flag_Trans: string;
  Top_Serv: boolean;
  CostCentGuid: string;
  InvAmt: number;
  StaffGuid: string;
}
