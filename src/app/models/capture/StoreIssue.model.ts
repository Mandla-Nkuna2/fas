import moment from 'moment';
export default class StoreIssue {
  StoreIssueGuid: string;
  StoreIssuedate: string;
  CaptureDate = moment().format('YYYY-MM-DD HH:mm');
  StoreCatgGuid: string;
  ItemGuid: string;
  MaintEvntGuid: string;
  StoreCatgItemGuid: string;
  CCDescription: string;
  CCRate: number;
  CCQty: number;
  SuppGuid: string;
  OrderNo: string;
  CaptureName: string;
  RegIndex: string;
  IncSuppBalance: string;
}
