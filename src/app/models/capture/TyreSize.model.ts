import moment from 'moment';
export default class TyreSize {
  TyreSizeGuid: string;
  TyreSize: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
