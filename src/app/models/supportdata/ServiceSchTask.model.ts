import moment from 'moment';
export default class ServiceSchTask {
  CheckListItemGuid: string;
  ChecklistItemName: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
  Active: string;
}
