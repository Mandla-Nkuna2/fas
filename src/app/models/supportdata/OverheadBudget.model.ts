import moment from 'moment';
export default class OverheadBudget {
  OverheadBudGuid: string;
  OverheadBudDate: string;
  OverheadBudAmt: number;
  OverheadTypeGuid: string;
  captureName: string;
  CapDate: string = moment().format('YYYY-MM-DD HH:mm');
}
