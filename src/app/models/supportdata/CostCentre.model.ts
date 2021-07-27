export default class CostCentre {
  CostCentGuid: string;
  CostCentName: string;
  CostCentDesc: string;
  StartDate: string;
  EndDate: string;
  ACCCostCode: string;
  CaptureDate: string = new Date().toString();
  Capturename: string;
  Comment: string;
  Active: string;
  BudgetedAmt: string;
  RoadLength: string;
}
