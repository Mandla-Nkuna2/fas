import moment from 'moment';
export default class OilClass {
  OilClassGuid: string;
  OilClass: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
