export default class LocationModel {
  LocGuid: string;
  LocLevel1code: number;
  LocLevel2code: number;
  LocLevel3code: string;
  LocLevel4code: number;
  LocLevel: number;
  LocItemCode: string;
  LocDesc: string;
  CaptureDate: string = new Date().toString();
  Active: string;
  LocFullName: string;
}
