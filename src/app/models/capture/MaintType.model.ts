import moment from 'moment';
export default class MaintType {
  MaintTypeGuid: string;
  MaintType: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
