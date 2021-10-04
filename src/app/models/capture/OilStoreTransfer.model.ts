import moment from 'moment';
export default class OilStoreTransfer {
  OilStoreTrnGuid: string;
  OilStoreTrnDate: string;
  CaptureDate = moment().format('YYYY-MM-DD HH:mm');
  VoucherNo: string;
  OilStoreFromGuid: string;
  OilStoreToGuid: string;
  OilQty: number;
  OilTypeGuid: string;
  CaptureName: string;
  CostCentGuid: string;
}
