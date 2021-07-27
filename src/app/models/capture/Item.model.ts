export default class Item {
  ItemGuid: string;
  Reg: string;
  Old_Reg: string;
  Reg_changeDate: string;
  CaptureDate: string = new Date().toString();
  DataCapturerName: string;
  ItemMakModGuid: string;
  ItemTypeGuid: string;
  ItemCatg: string;
  ColourGuid: string;
  Votecode: string;
  ChassisNo: string;
  EngineNo: string;
  MeterType: string;
  MeterRead: number;
  MeterReadDate: string;
  MeterOffset: number;
  TerminalYear: string;
  BatteryGuid: string;
  FrontTyreGuid: string;
  RearTyreGuid: string;
  LicenceDate: string;
  COFDate: string;
  DriverName: string;
  MechAvail: string;
  MonthlyAveKM: string;
  PlantUsage: string;
  Refurb: boolean;
  Archive: string;
  ArchiveDate: string;
  RentalVehicle: string;
  SubsidisedVehicle: string;
  Autocard: boolean;
  HourRate: number;
  DailyRate: number;
  KmRate: number;
  StandbyRate: number;
  ItemBud: number;
  LogType: string;
  CaptureName: string;
  StaffGuid: string;
  Inspectiondate: string;
  ManufYear: string;
  LocDate: string;
  LocItemCode: string;
  LicDiskRec: string;
  LicCost: number;
  LicAddCost: string;
  LicCostCentGuid: string;
}
