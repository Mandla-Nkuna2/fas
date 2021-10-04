import moment from 'moment';
export default class AssetTypeCap {
  ItemTypeCapGuid: string;
  ItemTypeCap: number;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
