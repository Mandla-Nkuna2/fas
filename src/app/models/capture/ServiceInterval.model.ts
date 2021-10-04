import moment from 'moment';
export default class ServiceInterval {
  ServIntvalGuid: string;
  ServIntval: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
