import moment from 'moment';
export default class AutoCard {
  AutoCardGuid: string;
  ItemGuid: string;
  CardNo: string;
  SeqNo: string;
  IssueDate: string;
  Cancelled: string;
  CancelDate: string;
  ExpiryDate: string;
  Comments: string;
  CaptureName: string;
  CaptureDate = moment().format('YYYY-MM-DD HH:mm');
}
