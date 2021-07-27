export default class User {
  UserGuid: string;
  UserFirstName: string;
  UserSurname: string;
  UserLogin: string;
  UserGroupGuid: string;
  UserPassword: string;
  Active: string;
  CaptureDate: string = new Date().toString();
  LocUserCode: string;
  Capturename: string;
}
