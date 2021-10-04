import moment from 'moment';
export default class ComponentName {
  CompNameGuid: string;
  CompName: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
