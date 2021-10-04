import moment from 'moment';
export default class AssetTypeName {
  ItemTypeNameGuid: string;
  ItemTypeName: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
