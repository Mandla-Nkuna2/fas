import moment from 'moment';
export default class StoreCatgItem {
  StoreCatgItemGuid: string;
  StoreCatgItem: string;
  StoreCatgGuid: string;
  Rate: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
