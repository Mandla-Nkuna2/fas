import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'assetdetail',
    loadChildren: () => import('./assetdetail/assetdetail.module').then( m => m.AssetdetailPageModule)
  },
  {
    path: 'addassetsinfo',
    loadChildren: () => import('./addassetsinfo/addassetsinfo.module').then( m => m.AddassetsinfoPageModule)
  },
  {
    path: 'assetsinfo',
    loadChildren: () => import('./assetsinfo/assetsinfo.module').then( m => m.AssetsinfoPageModule)
  },
  {
    path: 'addassets',
    loadChildren: () => import('./addassets/addassets.module').then( m => m.AddassetsPageModule)
  },
  {
    path: 'revenueearned',
    loadChildren: () => import('./revenueearned/revenueearned.module').then( m => m.RevenueearnedPageModule)
  },
  {
    path: 'revenucosts',
    loadChildren: () => import('./revenucosts/revenucosts.module').then( m => m.RevenucostsPageModule)
  },
  {
    path: 'addissuesinfo',
    loadChildren: () => import('./addissuesinfo/addissuesinfo.module').then( m => m.AddissuesinfoPageModule)
  },
  {
    path: 'accidentmanagement',
    loadChildren: () => import('./accidentmanagement/accidentmanagement.module').then( m => m.AccidentmanagementPageModule)
  },
  {
    path: 'trafficfine',
    loadChildren: () => import('./trafficfine/trafficfine.module').then( m => m.TrafficfinePageModule)
  },
  {
    path: 'fleet',
    loadChildren: () => import('./fleet/fleet.module').then( m => m.FleetPageModule)
  },
  {
    path: 'systemmanagement',
    loadChildren: () => import('./systemmanagement/systemmanagement.module').then( m => m.SystemmanagementPageModule)
  },
  {
    path: 'dailyoperations',
    loadChildren: () => import('./dailyoperations/dailyoperations.module').then( m => m.DailyoperationsPageModule)
  },
  {
    path: 'monthlyvehiclereport',
    loadChildren: () => import('./monthlyvehiclereport/monthlyvehiclereport.module').then( m => m.MonthlyvehiclereportPageModule)
  },
  {
    path: 'monthlyvrdetail',
    loadChildren: () => import('./monthlyvrdetail/monthlyvrdetail.module').then( m => m.MonthlyvrdetailPageModule)
  },
  {
    path: 'tiretracking',
    loadChildren: () => import('./tiretracking/tiretracking.module').then( m => m.TiretrackingPageModule)
  },
  {
    path: 'staffproreport',
    loadChildren: () => import('./staffproreport/staffproreport.module').then( m => m.StaffproreportPageModule)
  },
  {
    path: 'schedulestprorepo',
    loadChildren: () => import('./schedulestprorepo/schedulestprorepo.module').then( m => m.SchedulestprorepoPageModule)
  },
  {
    path: 'jobcard',
    loadChildren: () => import('./jobcard/jobcard.module').then( m => m.JobcardPageModule)
  },
  {
    path: 'repairhistory',
    loadChildren: () => import('./repairhistory/repairhistory.module').then( m => m.RepairhistoryPageModule)
  },
  {
    path: 'servicing',
    loadChildren: () => import('./servicing/servicing.module').then( m => m.ServicingPageModule)
  },
  {
    path: 'staffaudittrail',
    loadChildren: () => import('./staffaudittrail/staffaudittrail.module').then( m => m.StaffaudittrailPageModule)
  },
  {
    path: 'driverslicense',
    loadChildren: () => import('./driverslicense/driverslicense.module').then( m => m.DriverslicensePageModule)
  },
  {
    path: 'repairhistorydetail',
    loadChildren: () => import('./repairhistorydetail/repairhistorydetail.module').then( m => m.RepairhistorydetailPageModule)
  },
  {
    path: 'servicingdetail',
    loadChildren: () => import('./servicingdetail/servicingdetail.module').then( m => m.ServicingdetailPageModule)
  },
  {
    path: 'fuelconsumption',
    loadChildren: () => import('./fuelconsumption/fuelconsumption.module').then( m => m.FuelconsumptionPageModule)
  },
  {
    path: 'fuelbrowsenoilctrl',
    loadChildren: () => import('./fuelbrowsenoilctrl/fuelbrowsenoilctrl.module').then( m => m.FuelbrowsenoilctrlPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
