import moment from 'moment';
export default class ServiceSchedule {
  ServHistGuid: string;
  JobcardGuid: string;
  ServSchTask: string;
  Checked: string;
  ServSchComment: string;
  MaintEvntGuid: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
