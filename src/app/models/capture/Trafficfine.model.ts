import moment from 'moment';
export class Trafficfine {
  TrafficFineGuid: string;
  ItemGuid: string;
  OffenceDate: string;
  offenceTime: string;
  PaymentDate: string;
  Cost: number;
  CaptureName: string;
  CaptureDate = moment().format('YYYY-MM-DD HH:mm');
  Fineno: string;
  FineRecDate: string;
  SuperDate: string;
  SuperGuid: string;
  SuperAction: string;
  Offence: string;
  Driverguid: string;
  TrialDate: string;
  Comment: string;
  RegIndex: string;
  CostCentGuid: string;
}
