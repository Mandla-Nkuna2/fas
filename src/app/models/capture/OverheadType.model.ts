import moment from 'moment';
export default class OverheadType {
  OverheadTypeGuid: string;
  OverheadType: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
