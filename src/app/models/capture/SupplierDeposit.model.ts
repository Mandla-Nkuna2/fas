import moment from 'moment';
export default class SupplierDeposit {
  SupBalguid: string;
  SuppGuid: string;
  TransDate: string;
  TransFrom: string;
  TransFromGuid: string;
  AmtDeposit: number;
  AmtIssue: number;
  VoucherNo: string;
  Capturedate = moment().format('YYYY-MM-DD HH:mm');
  Capturename: string;
  comm: string;
}
