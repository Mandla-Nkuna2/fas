import moment from 'moment';
export default class StaffCategory {
  StaffCatgGuid: string;
  StaffCatg: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
