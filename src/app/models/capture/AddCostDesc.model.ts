import moment from 'moment';
export default class AddCostDesc {
  AddCostDescGuid: string;
  AddCostDesc: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
