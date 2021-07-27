export class JobCard {
  generalInformation: GeneralInformation;
  vehicleInformation: VehicleInformation;
  serviceInformation: ServiceInformation;
}

export class GeneralInformation {
  JobCardNo: string;
  ReportedDate: string;
  StartedDate: string;
  CompletedDate: string;
  StaffGuid: string;
  ItemGuid: string;
  CaptureName: string;
  CaptureDate: string = new Date().toString();
  ServTypeGuid: string;
  Item: string;
  RegIndex: string;
  EstCost: number;
  EstCompDate: string;
  driverOrOpGuid: string;
}
export class VehicleInformation {
  registrationNo: string;
  makeAndModel: string;
  type: string;
  engineNo: string;
  chassieNo: string;
  meterReading: number;
  meterReadingDate: string;
  manufacturerDate: string;
  warrantyPeriod: string;
  warrantyExpiryDate: string;
  alternateId1: string;
  location: string;
}
export class ServiceInformation {
  Defects: string;
  serviceType: string;
  type: string;
  componentOfCar: ComponentOfCar;
  outWork: OutWork;
  partsAndConsumablesIssued: PartsAndConsumablesIssued;
  workDone_MechanicsReport: WorkDone_MechanicsReport;
  partsForServType: string[] = ['', '', '', '', ''];
}

export class ComponentOfCar {
  componentName: string;
  engine: string;
  transmission: string;
  warranty: number;
  expiryDate: string;
  oilGrade: string;
  oilCapLtrs: string;
}
export class OutWork {}
export class PartsAndConsumablesIssued {}

export class WorkDone_MechanicsReport {
  meterReading: number;
  totalHours: number;
  mechanicSignature: string;
  foremanSignature: string;
  operatorSignature: string;
}
