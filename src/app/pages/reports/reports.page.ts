import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  reports = [
    // 'additionalcost',
    // 'alternateid',
    // 'archivedet',
    // 'assetlocdriv',
    // 'assetreg',
    // 'autocarddet',
    // 'autocardhistorydet',
    // 'bowserledger',
    // 'bowserledgersum',
    // 'bowsersummary',
    // 'budgetrep',
    // 'changedregistration',
    // 'componentmaint',
    // 'costcentresum',
    // 'costcenttransact',
    // 'costingschedul',
    // 'costlisting',
    // 'dailyopsrep',
    // 'dailyopssumm',
    // 'excessivedownt',
    // 'firstautomon',
    // 'firstautoytd',
    // 'fuelconsumptexcmajeq',
    // 'fuelconsumptexcveh',
    // 'fuelconsumptmajorequip',
    // 'fuelconsumptvehicle',
    // 'fuelissuesfleet',
    // 'fuelissuesitem',
    // 'fuelsupppurch',
    // 'itemlochist',
    // 'itemmeterchang',
    // 'itemmeterread',
    // 'jobcardnotcomplt',
    // 'jobcardreg',
    // 'licexp-cor-safinspc-dat',
    // 'listoflocs',
    // 'logdetails',
    // 'losscontrlisting',
    // 'maintevents',
    'mainthist',
    'maintreason',
    'makmoddetails',
    'missingdailyopsrec',
    'missingmonthlylogs',
    'monthlyplant',
    'monthlyvehicle',
    'oilconsumptmajequip',
    'oilconsumptvehicle',
    'oilissues',
    'oilstoreledger',
    'oilstoreledgersumm',
    'oilstoresumm',
    'oilsupppurch',
    'operatorsumm',
    'overallprofitloss',
    'overheadexpenditure',
    'revenueschedule',
    'runningcostsmajequip',
    'runningcostsmetlesequip',
    'runningcostsvehicl',
    'servicedetinquiry',
    'serviceoverdue',
    'serviceplanning',
    'serviceroster',
    'serviceschedulelist',
    'servicestatus',
    'staffaudittrail',
    'staffdailyschedule',
    'staffdet',
    'staffinputtimes',
    'stafflicprdpexpdat',
    'staffproductivity',
    'staffregister',
    'storeisscosph',
    'storeisscosphman',
    'storeissues',
    'subvehloc-drv',
    'subvehlogdet',
    'subvehmissinmthlog',
    'subvehstatus',
    'suppbal',
    'supppurchases',
    'systemmanmajequip',
    'systemmanveh',
    'trafficfines',
  ];

  report = 'additionalcost';

  constructor() { }

  ngOnInit() {
  }

}
