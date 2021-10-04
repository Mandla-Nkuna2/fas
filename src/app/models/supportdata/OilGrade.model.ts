import moment from 'moment';
export default class OilGrade {
  OilGradeGuid: string;
  OilGrade: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
