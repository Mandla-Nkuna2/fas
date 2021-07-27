export default class LicCorAndSafInspcDates {
  LicHistIndex: string;
  Itemguid: string;
  LicDate: string;
  corInspecDate: string;
  safetyInspecDate: string;
  diskFromLicBureau: boolean;
  LicCost: number;
  LicAddCost: number;
  RegIndex: string;
  Capturename: string;
  CaptureDate: string = new Date().toString();
  LicCostCentGuid: string;
}
