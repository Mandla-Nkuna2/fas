import moment from 'moment';
export default class Battery {
  BatteryGuid: string;
  BatterySize: number;
  BatteryMakeGuid: string;
  Active: string;
  CapName: string;
  CapDate: string = moment().format('YYYY-MM-DD HH:mm');
}
