import moment from 'moment';
export default class Bowser {
  BowserGuid: string;
  BowserHOCode: string;
  BowserName: string;
  BowserCap: string;
  BowserLoc: string;
  FuelTypeGuid: string;
  CaptureDate = moment().format('YYYY-MM-DD HH:mm');
  Active: string;
  CaptureName: string;
}
