import moment from 'moment';
export default class LossControlType {
  LossContTypeguid: string;
  LossContType: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
