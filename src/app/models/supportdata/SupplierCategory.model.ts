import moment from 'moment';
export default class SupplierCategory {
  SuppCategoryGuid: string;
  SuppCategory: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
