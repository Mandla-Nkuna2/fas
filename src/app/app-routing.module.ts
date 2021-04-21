import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'assetdetail',
    loadChildren: () => import('./pages/assetdetail/assetdetail.module').then( m => m.AssetdetailPageModule)
  },
  {
    path: 'addassetsinfo',
    loadChildren: () => import('./pages/addassetsinfo/addassetsinfo.module').then( m => m.AddassetsinfoPageModule)
  },
  {
    path: 'assetsinfo',
    loadChildren: () => import('./pages/assetsinfo/assetsinfo.module').then( m => m.AssetsinfoPageModule)
  },
  {
    path: 'addassets',
    loadChildren: () => import('./pages/addassets/addassets.module').then( m => m.AddassetsPageModule)
  },
  {
    path: 'revenueearned',
    loadChildren: () => import('./pages/revenueearned/revenueearned.module').then( m => m.RevenueearnedPageModule)
  },
  {
    path: 'revenucosts',
    loadChildren: () => import('./pages/revenucosts/revenucosts.module').then( m => m.RevenucostsPageModule)
  },
  {
    path: 'addissuesinfo',
    loadChildren: () => import('./pages/addissuesinfo/addissuesinfo.module').then( m => m.AddissuesinfoPageModule)
  },
  {
    path: 'accidentmanagement',
    loadChildren: () => import('./pages/accidentmanagement/accidentmanagement.module').then( m => m.AccidentmanagementPageModule)
  },
  {
    path: 'trafficfine',
    loadChildren: () => import('./pages/trafficfine/trafficfine.module').then( m => m.TrafficfinePageModule)
  },
  {
    path: 'fleet',
    loadChildren: () => import('./pages/fleet/fleet.module').then( m => m.FleetPageModule)
  },
  {
    path: 'systemmanagement',
    loadChildren: () => import('./pages/systemmanagement/systemmanagement.module').then( m => m.SystemmanagementPageModule)
  },
  {
    path: 'dailyoperations',
    loadChildren: () => import('./pages/dailyoperations/dailyoperations.module').then( m => m.DailyoperationsPageModule)
  },
  {
    path: 'monthlyvehiclereport',
    loadChildren: () => import('./pages/monthlyvehiclereport/monthlyvehiclereport.module').then( m => m.MonthlyvehiclereportPageModule)
  },
  {
    path: 'monthlyvrdetail',
    loadChildren: () => import('./pages/monthlyvrdetail/monthlyvrdetail.module').then( m => m.MonthlyvrdetailPageModule)
  },
  {
    path: 'tiretracking',
    loadChildren: () => import('./pages/tiretracking/tiretracking.module').then( m => m.TiretrackingPageModule)
  },
  {
    path: 'staffproreport',
    loadChildren: () => import('./pages/staffproreport/staffproreport.module').then( m => m.StaffproreportPageModule)
  },
  {
    path: 'schedulestprorepo',
    loadChildren: () => import('./pages/schedulestprorepo/schedulestprorepo.module').then( m => m.SchedulestprorepoPageModule)
  },
  {
    path: 'jobcard',
    loadChildren: () => import('./pages/jobcard/jobcard.module').then( m => m.JobcardPageModule)
  },
  {
    path: 'repairhistory',
    loadChildren: () => import('./pages/repairhistory/repairhistory.module').then( m => m.RepairhistoryPageModule)
  },
  {
    path: 'servicing',
    loadChildren: () => import('./pages/servicing/servicing.module').then( m => m.ServicingPageModule)
  },
  {
    path: 'staffaudittrail',
    loadChildren: () => import('./pages/staffaudittrail/staffaudittrail.module').then( m => m.StaffaudittrailPageModule)
  },
  {
    path: 'driverslicense',
    loadChildren: () => import('./pages/driverslicense/driverslicense.module').then( m => m.DriverslicensePageModule)
  },
  {
    path: 'repairhistorydetail',
    loadChildren: () => import('./pages/repairhistorydetail/repairhistorydetail.module').then( m => m.RepairhistorydetailPageModule)
  },
  {
    path: 'servicingdetail',
    loadChildren: () => import('./pages/servicingdetail/servicingdetail.module').then( m => m.ServicingdetailPageModule)
  },
  {
    path: 'fuelconsumption',
    loadChildren: () => import('./pages/fuelconsumption/fuelconsumption.module').then( m => m.FuelconsumptionPageModule)
  },
  {
    path: 'fuelbrowsenoilctrl',
    loadChildren: () => import('./pages/fuelbrowsenoilctrl/fuelbrowsenoilctrl.module').then( m => m.FuelbrowsenoilctrlPageModule)
  },
  {
    path: 'additionalcosts',
    loadChildren: () => import('./pages/additionalcosts/additionalcosts.module').then( m => m.AdditionalcostsPageModule)
  },
  {
    path: 'autocardetails',
    loadChildren: () => import('./pages/autocardetails/autocardetails.module').then( m => m.AutocardetailsPageModule)
  },
  {
    path: 'browsertransactions',
    loadChildren: () => import('./pages/browsertransactions/browsertransactions.module').then( m => m.BrowsertransactionsPageModule)
  },
  {
    path: 'browsertransfer',
    loadChildren: () => import('./pages/browsertransfer/browsertransfer.module').then( m => m.BrowsertransferPageModule)
  },
  {
    path: 'dailyoperationrecord',
    loadChildren: () => import('./pages/dailyoperationsrecord/dailyoperationrecord.module').then( m => m.DailyoperationrecordPageModule)
  },
  {
    path: 'fixedcostdetails',
    loadChildren: () => import('./pages/fixedcostdetails/fixedcostdetails.module').then( m => m.FixedcostdetailsPageModule)
  },
  {
    path: 'fixedcostransfer',
    loadChildren: () => import('./pages/fixedcostransfer/fixedcostransfer.module').then( m => m.FixedcostransferPageModule)
  },
  {
    path: 'fuelissues',
    loadChildren: () => import('./pages/fuelissues/fuelissues.module').then( m => m.FuelissuesPageModule)
  },
  {
    path: 'itemcomponents',
    loadChildren: () => import('./pages/itemcomponents/itemcomponents.module').then( m => m.ItemcomponentsPageModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./pages/items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'losscontrol',
    loadChildren: () => import('./pages/losscontrol/losscontrol.module').then( m => m.LosscontrolPageModule)
  },
  {
    path: 'licensecor',
    loadChildren: () => import('./pages/licensecor/licensecor.module').then( m => m.LicensecorPageModule)
  },
  {
    path: 'maintaincevent',
    loadChildren: () => import('./pages/maintaincevent/maintaincevent.module').then( m => m.MaintainceventPageModule)
  },
  {
    path: 'oilissues',
    loadChildren: () => import('./pages/oilissues/oilissues.module').then( m => m.OilissuesPageModule)
  },
  {
    path: 'oilstoretrans',
    loadChildren: () => import('./pages/oilstoretrans/oilstoretrans.module').then( m => m.OilstoretransPageModule)
  },
  {
    path: 'oiltransafer',
    loadChildren: () => import('./pages/oiltransafer/oiltransafer.module').then( m => m.OiltransaferPageModule)
  },
  {
    path: 'overheadtrans',
    loadChildren: () => import('./pages/overheadtrans/overheadtrans.module').then( m => m.OverheadtransPageModule)
  },
  {
    path: 'stafftimesheets',
    loadChildren: () => import('./pages/stafftimesheets/stafftimesheets.module').then( m => m.StafftimesheetsPageModule)
  },
  {
    path: 'revenue',
    loadChildren: () => import('./pages/revenue/revenue.module').then( m => m.RevenuePageModule)
  },
  {
    path: 'storeissue',
    loadChildren: () => import('./pages/storeissue/storeissue.module').then( m => m.StoreissuePageModule)
  },
  {
    path: 'supdeposit',
    loadChildren: () => import('./pages/supdeposit/supdeposit.module').then( m => m.SupdepositPageModule)
  },
  {
    path: 'fuelnoilprice',
    loadChildren: () => import('./pages/fuelnoilprice/fuelnoilprice.module').then( m => m.FuelnoilpricePageModule)
  },
  {
    path: 'absaimport',
    loadChildren: () => import('./pages/absaimport/absaimport.module').then( m => m.AbsaimportPageModule)
  },
  {
    path: 'fueltransimport',
    loadChildren: () => import('./pages/fueltransimport/fueltransimport.module').then( m => m.FueltransimportPageModule)
  },
  {
    path: 'importlogtransfor',
    loadChildren: () => import('./pages/importlogtransfor/importlogtransfor.module').then( m => m.ImportlogtransforPageModule)
  },
  {
    path: 'importfirstautotrans',
    loadChildren: () => import('./pages/importfirstautotrans/importfirstautotrans.module').then( m => m.ImportfirstautotransPageModule)
  },
  {
    path: 'importgeotab',
    loadChildren: () => import('./pages/importgeotab/importgeotab.module').then( m => m.ImportgeotabPageModule)
  },
  {
    path: 'stannicimport',
    loadChildren: () => import('./pages/stannicimport/stannicimport.module').then( m => m.StannicimportPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
