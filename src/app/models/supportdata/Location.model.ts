import moment from 'moment';
export default class LocationModel {
  LocGuid: string;
  LocLevel1code: number;
  LocLevel2code: number;
  LocLevel3code: string;
  LocLevel4code: number;
  LocLevel: number;
  LocItemCode: string;
  LocDesc: string;
  CaptureDate = moment().format('YYYY-MM-DD HH:mm');
  Active: string;
  LocFullName: string;
  captureName: string;
}
