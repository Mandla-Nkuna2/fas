import moment from 'moment';
export default class MaintenanceEvent {
  MaintEvntGuid: string;
  RefNo: string;
  ItemGuid: string;
  StartDate: string;
  CompleteDate: string;
  IncSuppBalance: string;
  CaptureDate = moment().format('YYYY-MM-DD HH:mm');
  MaintTypeGuid: string;
  MaintReasonGuid: string;
  MeterRead: number;
  MeterReadDate: string;
  CostEst: string;
  CostAct: number;
  SuppGuid: string;
  Workdone: string;
  CaptureName: string;
  RequestByGuid: string;
  JobCardGuid: string;
  RegIndex: string;
  CostCentGuid: string;
}
