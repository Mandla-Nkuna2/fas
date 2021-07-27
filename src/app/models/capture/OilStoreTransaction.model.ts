export default class OilStoreTransaction {
  OilStoreTrnGuid: string;
  OilStoreTrnDate: string;
  CaptureDate: string = new Date().toString();
  OilStoreGuid: string;
  Purc_or_Count: string;
  OilTypeguid: string;
  OilQtyinStore: number;
  OilQtyPurc: number;
  OilCost: number;
  OrderNo: string;
  SuppGuid: string;
  CaptureName: string;
  CostCentGuid: string;
}
