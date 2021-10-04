import moment from 'moment';
export default class AssetTypeClass {
  ItemTypeClassGuid: string;
  ItemTypeClass: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
