export class JobCard    {
    generalInformation: GeneralInformation
    vehicleInformation: VehicleInformation
    serviceInformation: ServiceInformation
}

export class GeneralInformation    {
    JobCardNo: string
    ReportedDate: string
    StartedDate: string
    CompletedDate: string
    StaffGuid: string
    ItemGuid: string
    Defects: string
    CaptureName: string[] = ["MAZDA323200E", "hawaii"]
    CaptureDate: string
    ServTypeGuid: string
    Item: string
    RegIndex: string
    EstCost: number
    EstCompDate: string
    driverOrOperator: string[] = ["MAZDA323200E", "hawaii"]
}
export class VehicleInformation    {
  registrationNo: string
  makeAndModel: string
  type: string
  engineNo: string
  chassieNo: string
  meterReading: number
  meterReadingDate: string
  manufacturerDate: string
  warrantyPeriod: string
  warrantyExpiryDate: string
  alternateId1: string
  location: string
}
export class ServiceInformation    {
  workDescription: string
  serviceType: string
  type: string
  componentOfCar: ComponentOfCar
}

export class ComponentOfCar {
  componentName: string
  warranty: number
  expiryDate: string
}
export class OutWork    {

}
export class PartsAndConsumablesIssued    {

}

export class WorkDone_MechanicsReport    {

}
