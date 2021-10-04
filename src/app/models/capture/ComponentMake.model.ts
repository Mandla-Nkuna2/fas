import moment from 'moment';
export default class ComponentMake {
  CompMakeGuid: string;
  CompMake: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
