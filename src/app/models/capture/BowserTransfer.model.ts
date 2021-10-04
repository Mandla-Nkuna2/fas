import moment from 'moment';
export default class BowserTransfer {
  FuelTransferGuid: string;
  FuelTransferDate: string;
  CaptureDate = moment().format('YYYY-MM-DD HH:mm');
  VoucherNo: string;
  BowserFromGuid: string;
  BowserFromPump: number;
  BowserToGuid: string;
  BowserToPump: number;
  FuelQty: number;
  CaptureName: string;
  VoucherCount: number;
  CostCentGuid: string;
}
