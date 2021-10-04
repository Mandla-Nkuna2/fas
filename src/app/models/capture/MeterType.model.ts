import moment from 'moment';
export default class MeterType {
  meterTypeUuid: string;
  meterTypeName: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
