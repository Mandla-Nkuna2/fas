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
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
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
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then( m => m.SignInPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
