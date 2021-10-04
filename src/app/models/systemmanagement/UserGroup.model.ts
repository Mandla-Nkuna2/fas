import moment from 'moment';
export default class className {
  UserGroupGuid: string;
  UserGroupTitle: string;
  Active: string;
  captureName: string;
  CapDate: string = moment().format('YYYY-MM-DD HH:mm');
}
