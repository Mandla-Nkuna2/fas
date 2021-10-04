import moment from 'moment';
export default class FixedCostsDet {
  FixedCostGuid: string;
  FixedCostType: string;
  ItemGuid: string;
  CostRate: string;
  CostRate_no: number;
  Amount: number;
  StartDate: string;
  CaptureDate = moment().format('YYYY-MM-DD HH:mm');
  LeaseContact: string;
  LeaseStart: string;
  LeaseEnd: string;
  CaptureName: string;
  RegIndex: string;
}
