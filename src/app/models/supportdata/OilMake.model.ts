import moment from 'moment';
export default class OilMake {
  OilMakeGuid: string;
  OilMake: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
