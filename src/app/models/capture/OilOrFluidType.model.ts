import moment from 'moment';
export default class OilOrFluidType {
  OilGuid: string;
  OilClassGuid: string;
  OilMakeGuid: string;
  OilGradeGuid: string;
  Price: number;
  active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
