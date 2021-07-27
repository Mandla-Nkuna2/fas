export default class BowserTransaction {
  BowserTrnGuid: string;
  BowserGuid: string;
  BowserTrnDate: string;
  CaptureDate: string = new Date().toString();
  Purc_or_Dip: string;
  PumpReading: number;
  FuelQtyatDip: number;
  FuelQtyPurc: number;
  FuelCost: number;
  OrderNo: string;
  SuppGuid: string;
  CaptureName: string;
  CostCentGuid: string;
}
