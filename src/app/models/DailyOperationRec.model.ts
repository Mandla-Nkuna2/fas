export default class DailyOperationRec {
  registration: string
  location: string
  date: string
  rate: number
  voucherNo: string
  orderNo: string
  refNo: string
  openMeterReading: number
  closeMeterReading: number
  meterReadingDiff: number
  costCentre: string
  rainHours: number
  standbyHours: number
  breakdownHours: number
  otherHours: number
  reasonForOtherHrs: string
  kmOrHoursWorked: number
  weekendKmOrHrsWorked: number
  loadCapacity: number
  operator: Operator
};

export class Operator {
  name: string
  startTime: string
  endTime: string
  authorizedOperationHrs: number
};

