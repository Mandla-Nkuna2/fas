export default class DailyOperationRec {
  PlantSheetguid : string
  Voucherno: string
  Itemguid: string
  PlantSheetDate: string
  OpenOdo: number
  CloseOdo: number
  CalWrkKmHr: number
  WrkKmHr: number
  WeekendKmHr: number
  RainHrs: number
  StandHrs: number
  BreakHrs: number
  OtherHrs: number
  Reason: string
  CostCentreguid: string
  LoadCapacity: number
  RegIndex: string
  Capturedate: string
  CaptureName: string
  LoadUnit: string
  OrdNumber: number
  RefNumber: string
  LocItemCode: string
  operator: Operator
};

export class Operator {
  StaffGuid: string
  Starttime: string
  Endtime: string
  BreakTime: number
};

