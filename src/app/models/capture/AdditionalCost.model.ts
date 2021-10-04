import moment from 'moment';
export class AdditionalCost {
  AddCostGuid: string;
  Capturedate = moment().format('YYYY-MM-DD HH:mm');
  Capturename: string;
  Itemguid: string;
  RegIndex: string;
  AddCostDate: string;
  AddCostAmt: number;
  AddCostDescGuid: string;
  VoucherNo: string;
  CostCentreGuid: string;
  AddCostLoc: string;
  AddCostComm: string;
  IncSuppBalance: string;
  Suppguid: string;
  StaffGuid: string;
}
