import moment from 'moment';
export default class StaffTimesheet {
  Staff_TrnGuid: string;
  Staff_TrnDate: string;
  CaptureDate = moment().format('YYYY-MM-DD HH:mm');
  StaffGuid: string;
  Supervisor: string;
  Productive: number;
  Non_Productive: number;
  Travel: number;
  Sick_leave: number;
  Leave: number;
  AWOL: number;
  CaptureName: string;
  Overtime: number;
  Prod_NonItem: string;
  Travel_Item: string;
  Prod_Comm: number;
  NPTravelDist: string;
  Travel_NonItem: string;
  Overtime_NonItem: string;
  OTTravel1: number;
  OTTravel2: number;
}
