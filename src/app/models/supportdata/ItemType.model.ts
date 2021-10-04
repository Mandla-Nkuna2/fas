import moment from 'moment';
export default class ItemType {
  ItemTypeGuid: string;
  ItemType: string;
  Active: string;
  ItemTypeNameGuid: string;
  ItemTypeClassGuid: string;
  ItemTypeCapGuid: string;
  ItemTypeUnit: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
  ItemTypeunitguid: string;
  FrontPressure: number;
  RearPressure: number;
}
