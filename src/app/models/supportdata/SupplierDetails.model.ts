import moment from 'moment';
export default class SupplierDetails {
  SuppGuid: string;
  SuppName: string;
  SuppAddress_ln0: string;
  SuppAddress_ln1: string;
  SuppAddress_ln2: string;
  SuppAddress_ln3: string;
  SuppAddress_code: number;
  SuppTel: string;
  SuppFax: string;
  SuppCategoryGuid: string;
  Active: string;
  CaptureDate = moment().format('YYYY-MM-DD HH:mm');
  SuppBal: string;
  AccNumber: string;
  CaptureName: string;
}
