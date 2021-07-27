export default class OilStoreTransfer {
  OilStoreTrnGuid: string;
  OilStoreTrnDate: string;
  CaptureDate: string = new Date().toString();
  VoucherNo: string;
  OilStoreFromGuid: string;
  OilStoreToGuid: string;
  OilQty: number;
  OilTypeGuid: string;
  CaptureName: string;
  CostCentGuid: string;
}
