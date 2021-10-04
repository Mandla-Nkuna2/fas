import moment from 'moment';
export default class ItemMakeAndModel {
  ItemMakModGuid: string;
  ItemMake: string;
  ItemModel: string;
  Transmission: string;
  FuelConsump: number;
  FuelCap: number;
  FuelTypeGuid: string;
  Mass: number;
  PowerOutput: number;
  Lic: any;
  COF: any;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
