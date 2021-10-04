import moment from 'moment';
export default class User {
  UserGuid: string;
  UserFirstName: string;
  UserSurname: string;
  UserLogin: string;
  UserGroupGuid: string;
  UserPassword: string;
  Active: string;
  CaptureDate = moment().format('YYYY-MM-DD HH:mm');
  LocUserCode: string;
  Capturename: string;
  phoneNumber: string;
  organization: string;
}
