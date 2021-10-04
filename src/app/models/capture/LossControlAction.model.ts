import moment from 'moment';
export default class LossControlAction {
  LossContActGuid: string;
  LossContAct: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
