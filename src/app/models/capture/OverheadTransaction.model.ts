import moment from 'moment';
export default class OverheadTransaction {
  OverheadGuid: string;
  OverheadDate: string;
  OverheadAmt: number;
  OverheadRef: string;
  OverheadTypeGuid: string;
  CaptureDate = moment().format('YYYY-MM-DD HH:mm');
  CaptureName: string;
  OverheadComm: string;
  OverheadLoc: string;
  CostCentGuid: string;
}
