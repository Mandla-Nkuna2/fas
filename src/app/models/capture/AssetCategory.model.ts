import moment from 'moment';
export default class AssetCategory {
  assetCatName: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
