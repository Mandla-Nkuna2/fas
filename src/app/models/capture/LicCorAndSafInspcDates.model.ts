import moment from 'moment';
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
  Capturedate = moment().format('YYYY-MM-DD HH:mm');
  LicCostCentGuid: string;
}
