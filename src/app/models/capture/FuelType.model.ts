import moment from 'moment';
export default class FuelType {
  FuelTypeGuid: string;
  FuelType: string;
  FuelPrice = 0;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
