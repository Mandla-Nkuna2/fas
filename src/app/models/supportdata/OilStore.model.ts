import moment from 'moment';
export default class OilStore {
  OilStoreGuid: string;
  OilStoreHOCode: string;
  OilStoreName: string;
  OilStoreLoc: string;
  CaptureDate = moment().format('YYYY-MM-DD HH:mm');
  Active: string;
  CaptureName: string;
}
