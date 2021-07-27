export default class StoreIssue {
  StoreIssueGuid: string;
  StoreIssuedate: string;
  CaptureDate: string = new Date().toString();
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
