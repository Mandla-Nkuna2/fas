import moment from 'moment';
export default class TraffFineAct {
  TrafFineActGuid: string;
  TrafficFineAction: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
