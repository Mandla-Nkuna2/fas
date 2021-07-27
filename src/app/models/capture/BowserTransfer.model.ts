export default class BowserTransfer {
  FuelTransferGuid: string;
  FuelTransferDate: string;
  CaptureDate: string = new Date().toString();
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
