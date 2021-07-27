export default class FixedCostsDet {
  FixedCostGuid: string;
  FixedCostType: string;
  ItemGuid: string;
  CostRate: string;
  CostRate_no: number;
  Amount: number;
  StartDate: string;
  CaptureDate: string = new Date().toString();
  LeaseContact: string;
  LeaseStart: string;
  LeaseEnd: string;
  CaptureName: string;
  RegIndex: string;
}
