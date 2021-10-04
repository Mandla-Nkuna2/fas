import moment from 'moment';
export default class ComponentModel {
  CompModelGuid: string;
  CompModel: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
