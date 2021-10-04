import moment from 'moment';
export default class FixedCostType {
  FixedCostTypeGuid: string;
  FixedCostType: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
