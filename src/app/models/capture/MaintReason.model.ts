import moment from 'moment';
export default class MaintReason {
  MaintReasonGuid: string;
  MaintReason: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
