import moment from 'moment';
export default class ServiceType {
  ServTypeGuid: string;
  ServType: number;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
