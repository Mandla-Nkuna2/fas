export default class OverheadTransaction {
  OverheadGuid: string;
  OverheadDate: string;
  OverheadAmt: number;
  OverheadRef: string;
  OverheadTypeGuid: string;
  CaptureDate: string = new Date().toString();
  CaptureName: string;
  OverheadComm: string;
  OverheadLoc: string;
  CostCentGuid: string;
}
