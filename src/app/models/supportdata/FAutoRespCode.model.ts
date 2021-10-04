import moment from 'moment';
export default class FAutoRespCode {
  ResponseGuid: string;
  ResponseCode: string;
  Active: string;
  CapName: string;
  CapDate = moment().format('YYYY-MM-DD HH:mm');
}
