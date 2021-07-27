export class Asset {
  generalInformation: GeneralInformation;
  meterInformation: MeterInformation;
  rateInformation: RateInformation;
  otherInformation: OtherInformation;
}

export class GeneralInformation {
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
  ChassisNo: string;
  EngineNo: string;
  BatteryGuid: string;
  FrontTyreGuid: string;
  RearTyreGuid: string;
  COFDate: string;
  DriverName: string;
  PlantUsage: string;
  Archive: string;
  ArchiveDate: string;
  RentalVehicle: string;
  SubsidisedVehicle: string;
  LogType: string;
  CaptureName: string;
  StaffGuid: string;
  Inspectiondate: string;
  LocDate: string;
  LocItemCode: string;
  LicDiskRec: string;
  LicCost: number;
  LicAddCost: number;
  LicCostCentGuid: string;
}

export class MeterInformation {
  MeterType: string;
  MeterRead: number;
  MeterReadDate: string;
  MeterOffset: number;
  LicenceDate: string;
}

export class RateInformation {
  HourRate: number;
  KmRate: number;
  DailyRate: number;
  StandbyRate: number;
}

export class OtherInformation {
  ManufYear: string;
  TerminalYear: string;
  Votecode: string;
  ItemBud: number;
  MechAvail: number;
  MonthlyAveKM: number;
  Refurb: boolean;
  Autocard: boolean;
  rentalVehicle: boolean;
  govSubsidisedVeh: boolean;
}
