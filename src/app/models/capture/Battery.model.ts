export default class Battery {
  BatteryGuid: string;
  BatterySize: number;
  BatteryMakeGuid: string;
  Active: string;
  CapName: string;
  CapDate: string = new Date().toString();
}
