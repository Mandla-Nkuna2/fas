import moment from 'moment';
export default class BowserTransaction {
  BowserTrnGuid: string;
  BowserGuid: string;
  BowserTrnDate: string;
  CaptureDate = moment().format('YYYY-MM-DD HH:mm');
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
