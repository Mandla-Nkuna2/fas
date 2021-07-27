export default class FuelIssue {
  FuelIssueGuid: string;
  FuelIssuedate: string;
  CaptureDate: string = new Date().toString();
  VoucherNo: number;
  ItemGuid: string;
  FuelQty: number;
  FuelTotalCost: number;
  MeterRead: number;
  BowserGuid: string;
  PumpReading: number;
  Supplier: string;
  SupplierGuid: string;
  Varience01: string;
  Varience02: string;
  Varience03: string;
  Trans: string;
  CHG_No_CHG: string;
  MeterDiff: number;
  CaptureName: string;
  Attendant: string;
  Flag_Trans: string;
  RegIndex: string;
  CostCentGuid: string;
  InvAmt: string;
  StaffGuid: string;
}
