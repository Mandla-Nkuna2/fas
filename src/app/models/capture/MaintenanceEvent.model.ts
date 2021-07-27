export default class MaintenanceEvent {
  MaintEvntGuid: string;
  RefNo: number;
  ItemGuid: string;
  StartDate: string;
  CompleteDate: string;
  IncSuppBalance: string;
  CaptureDate: string = new Date().toString();
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
