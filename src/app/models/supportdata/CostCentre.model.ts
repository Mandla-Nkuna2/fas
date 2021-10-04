import moment from 'moment';
export default class CostCentre {
  CostCentGuid: string;
  CostCentName: string;
  CostCentDesc: string;
  StartDate: string;
  EndDate: string;
  ACCCostCode: string;
  Capturedate = moment().format('YYYY-MM-DD HH:mm');
  Capturename: string;
  Comment: string;
  Active: string;
  BudgetedAmt: string;
  RoadLength: string;
}
