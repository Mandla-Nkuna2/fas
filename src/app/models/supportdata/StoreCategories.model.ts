import moment from 'moment';
export default class StoreCategory {
  StoreCatgGuid: string;
  StoreCatg: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
