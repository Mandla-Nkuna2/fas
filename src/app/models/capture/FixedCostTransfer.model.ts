export default class FixedCostTransfer {
  FixedcostTransGuid: string;
  ItemGuid: string;
  Deprec_Amt: number;
  Insur_Amt: number;
  Lease_Amt: number;
  Lic_Amt: number;
  TransDate: string;
  CaptureName: string;
  CaptureDate: string = new Date().toString();
  RegIndex: string;
  CostCentGuid: string;
}
