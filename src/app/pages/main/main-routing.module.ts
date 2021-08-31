import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: '',
        redirectTo: 'main/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardPageModule,
          ),
      },
      {
        path: '',
        redirectTo: 'main/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'folder/:id',
        loadChildren: () =>
          import('../folder/folder.module').then((m) => m.FolderPageModule),
      },
      {
        path: 'assetdetail',
        loadChildren: () =>
          import('../assetdetail/assetdetail.module').then(
            (m) => m.AssetdetailPageModule,
          ),
      },
      {
        path: 'addassetsinfo',
        loadChildren: () =>
          import('../addassetsinfo/addassetsinfo.module').then(
            (m) => m.AddassetsinfoPageModule,
          ),
      },
      {
        path: 'assetsinfo',
        loadChildren: () =>
          import('../assetsinfo/assetsinfo.module').then(
            (m) => m.AssetsinfoPageModule,
          ),
      },
      {
        path: 'addassets',
        loadChildren: () =>
          import('../addassets/addassets.module').then(
            (m) => m.AddassetsPageModule,
          ),
      },
      {
        path: 'revenueearned',
        loadChildren: () =>
          import('../revenueearned/revenueearned.module').then(
            (m) => m.RevenueearnedPageModule,
          ),
      },
      {
        path: 'revenucosts',
        loadChildren: () =>
          import('../revenucosts/revenucosts.module').then(
            (m) => m.RevenucostsPageModule,
          ),
      },
      {
        path: 'addissuesinfo',
        loadChildren: () =>
          import('../addissuesinfo/addissuesinfo.module').then(
            (m) => m.AddissuesinfoPageModule,
          ),
      },
      {
        path: 'accidentmanagement',
        loadChildren: () =>
          import('../accidentmanagement/accidentmanagement.module').then(
            (m) => m.AccidentmanagementPageModule,
          ),
      },
      {
        path: 'trafficfine',
        loadChildren: () =>
          import('../trafficfine/trafficfine.module').then(
            (m) => m.TrafficfinePageModule,
          ),
      },
      {
        path: 'fleet',
        loadChildren: () =>
          import('../fleet/fleet.module').then((m) => m.FleetPageModule),
      },
      {
        path: 'systemmanagement',
        loadChildren: () =>
          import('../systemmanagement/systemmanagement.module').then(
            (m) => m.SystemmanagementPageModule,
          ),
      },
      {
        path: 'dailyoperations',
        loadChildren: () =>
          import('../dailyoperations/dailyoperations.module').then(
            (m) => m.DailyoperationsPageModule,
          ),
      },
      {
        path: 'monthlyvehiclereport',
        loadChildren: () =>
          import('../monthlyvehiclereport/monthlyvehiclereport.module').then(
            (m) => m.MonthlyvehiclereportPageModule,
          ),
      },
      {
        path: 'monthlyvrdetail',
        loadChildren: () =>
          import('../monthlyvrdetail/monthlyvrdetail.module').then(
            (m) => m.MonthlyvrdetailPageModule,
          ),
      },
      {
        path: 'tiretracking',
        loadChildren: () =>
          import('../tiretracking/tiretracking.module').then(
            (m) => m.TiretrackingPageModule,
          ),
      },
      {
        path: 'staffproreport',
        loadChildren: () =>
          import('../staffproreport/staffproreport.module').then(
            (m) => m.StaffproreportPageModule,
          ),
      },
      {
        path: 'schedulestprorepo',
        loadChildren: () =>
          import('../schedulestprorepo/schedulestprorepo.module').then(
            (m) => m.SchedulestprorepoPageModule,
          ),
      },
      {
        path: 'jobcard',
        loadChildren: () =>
          import('../jobcard/jobcard.module').then((m) => m.JobcardPageModule),
      },
      {
        path: 'repairhistory',
        loadChildren: () =>
          import('../repairhistory/repairhistory.module').then(
            (m) => m.RepairhistoryPageModule,
          ),
      },
      {
        path: 'servicing',
        loadChildren: () =>
          import('../servicing/servicing.module').then(
            (m) => m.ServicingPageModule,
          ),
      },
      {
        path: 'staffaudittrail',
        loadChildren: () =>
          import('../staffaudittrail/staffaudittrail.module').then(
            (m) => m.StaffaudittrailPageModule,
          ),
      },
      {
        path: 'driverslicense',
        loadChildren: () =>
          import('../driverslicense/driverslicense.module').then(
            (m) => m.DriverslicensePageModule,
          ),
      },
      {
        path: 'repairhistorydetail',
        loadChildren: () =>
          import('../repairhistorydetail/repairhistorydetail.module').then(
            (m) => m.RepairhistorydetailPageModule,
          ),
      },
      {
        path: 'servicingdetail',
        loadChildren: () =>
          import('../servicingdetail/servicingdetail.module').then(
            (m) => m.ServicingdetailPageModule,
          ),
      },
      {
        path: 'fuelconsumption',
        loadChildren: () =>
          import('../fuelconsumption/fuelconsumption.module').then(
            (m) => m.FuelconsumptionPageModule,
          ),
      },
      {
        path: 'fuelbrowsenoilctrl',
        loadChildren: () =>
          import('../fuelbrowsenoilctrl/fuelbrowsenoilctrl.module').then(
            (m) => m.FuelbrowsenoilctrlPageModule,
          ),
      },
      {
        path: 'additionalcosts',
        loadChildren: () =>
          import('../additionalcosts/additionalcosts.module').then(
            (m) => m.AdditionalcostsPageModule,
          ),
      },
      {
        path: 'autocardetails',
        loadChildren: () =>
          import('../autocardetails/autocardetails.module').then(
            (m) => m.AutocardetailsPageModule,
          ),
      },
      {
        path: 'browsertransactions',
        loadChildren: () =>
          import('../browsertransactions/browsertransactions.module').then(
            (m) => m.BrowsertransactionsPageModule,
          ),
      },
      {
        path: 'browsertransfer',
        loadChildren: () =>
          import('../browsertransfer/browsertransfer.module').then(
            (m) => m.BrowsertransferPageModule,
          ),
      },
      {
        path: 'dailyoperationrecord',
        loadChildren: () =>
          import('../dailyoperationsrecord/dailyoperationrecord.module').then(
            (m) => m.DailyoperationrecordPageModule,
          ),
      },
      {
        path: 'fixedcostdetails',
        loadChildren: () =>
          import('../fixedcostdetails/fixedcostdetails.module').then(
            (m) => m.FixedcostdetailsPageModule,
          ),
      },
      {
        path: 'fixedcostransfer',
        loadChildren: () =>
          import('../fixedcostransfer/fixedcostransfer.module').then(
            (m) => m.FixedcostransferPageModule,
          ),
      },
      {
        path: 'fuelissues',
        loadChildren: () =>
          import('../fuelissues/fuelissues.module').then(
            (m) => m.FuelissuesPageModule,
          ),
      },
      {
        path: 'itemcomponents',
        loadChildren: () =>
          import('../itemcomponents/itemcomponents.module').then(
            (m) => m.ItemcomponentsPageModule,
          ),
      },
      {
        path: 'items',
        loadChildren: () =>
          import('../items/items.module').then((m) => m.ItemsPageModule),
      },
      {
        path: 'losscontrol',
        loadChildren: () =>
          import('../losscontrol/losscontrol.module').then(
            (m) => m.LosscontrolPageModule,
          ),
      },
      {
        path: 'licensecor',
        loadChildren: () =>
          import('../licensecor/licensecor.module').then(
            (m) => m.LicensecorPageModule,
          ),
      },
      {
        path: 'maintaincevent',
        loadChildren: () =>
          import('../maintaincevent/maintaincevent.module').then(
            (m) => m.MaintainceventPageModule,
          ),
      },
      {
        path: 'oilissues',
        loadChildren: () =>
          import('../oilissues/oilissues.module').then(
            (m) => m.OilissuesPageModule,
          ),
      },
      {
        path: 'oilstoretrans',
        loadChildren: () =>
          import('../oilstoretrans/oilstoretrans.module').then(
            (m) => m.OilstoretransPageModule,
          ),
      },
      {
        path: 'oiltransafer',
        loadChildren: () =>
          import('../oiltransafer/oiltransafer.module').then(
            (m) => m.OiltransaferPageModule,
          ),
      },
      {
        path: 'overheadtrans',
        loadChildren: () =>
          import('../overheadtrans/overheadtrans.module').then(
            (m) => m.OverheadtransPageModule,
          ),
      },
      {
        path: 'stafftimesheets',
        loadChildren: () =>
          import('../stafftimesheets/stafftimesheets.module').then(
            (m) => m.StafftimesheetsPageModule,
          ),
      },
      {
        path: 'revenue',
        loadChildren: () =>
          import('../revenue/revenue.module').then((m) => m.RevenuePageModule),
      },
      {
        path: 'storeissue',
        loadChildren: () =>
          import('../storeissue/storeissue.module').then(
            (m) => m.StoreissuePageModule,
          ),
      },
      {
        path: 'supdeposit',
        loadChildren: () =>
          import('../supdeposit/supdeposit.module').then(
            (m) => m.SupdepositPageModule,
          ),
      },
      {
        path: 'fuelnoilprice',
        loadChildren: () =>
          import('../fuelnoilprice/fuelnoilprice.module').then(
            (m) => m.FuelnoilpricePageModule,
          ),
      },
      {
        path: 'absaimport',
        loadChildren: () =>
          import('../absaimport/absaimport.module').then(
            (m) => m.AbsaimportPageModule,
          ),
      },
      {
        path: 'fueltransimport',
        loadChildren: () =>
          import('../fueltransimport/fueltransimport.module').then(
            (m) => m.FueltransimportPageModule,
          ),
      },
      {
        path: 'importlogtransfor',
        loadChildren: () =>
          import('../importlogtransfor/importlogtransfor.module').then(
            (m) => m.ImportlogtransforPageModule,
          ),
      },
      {
        path: 'importfirstautotrans',
        loadChildren: () =>
          import('../importfirstautotrans/importfirstautotrans.module').then(
            (m) => m.ImportfirstautotransPageModule,
          ),
      },
      {
        path: 'importgeotab',
        loadChildren: () =>
          import('../importgeotab/importgeotab.module').then(
            (m) => m.ImportgeotabPageModule,
          ),
      },
      {
        path: 'stannicimport',
        loadChildren: () =>
          import('../stannicimport/stannicimport.module').then(
            (m) => m.StannicimportPageModule,
          ),
      },
      {
        path: 'bowser',
        loadChildren: () =>
          import('../bowser/bowser.module').then((m) => m.BowserPageModule),
      },
      {
        path: 'clientdetails',
        loadChildren: () =>
          import('../clientdetails/clientdetails.module').then(
            (m) => m.ClientdetailsPageModule,
          ),
      },
      {
        path: 'costcentre',
        loadChildren: () =>
          import('../costcentre/costcentre.module').then(
            (m) => m.CostcentrePageModule,
          ),
      },
      {
        path: 'itemmakemodel',
        loadChildren: () =>
          import('../itemmakemodel/itemmakemodel.module').then(
            (m) => m.ItemmakemodelPageModule,
          ),
      },
      {
        path: 'itemtype',
        loadChildren: () =>
          import('../itemtype/itemtype.module').then(
            (m) => m.ItemtypePageModule,
          ),
      },
      {
        path: 'location',
        loadChildren: () =>
          import('../location/location.module').then(
            (m) => m.LocationPageModule,
          ),
      },
      {
        path: 'componentname',
        loadChildren: () =>
          import('../componentname/componentname.module').then(
            (m) => m.ComponentnamePageModule,
          ),
      },
      {
        path: 'oilstore',
        loadChildren: () =>
          import('../oilstore/oilstore.module').then(
            (m) => m.OilstorePageModule,
          ),
      },
      {
        path: 'overheadbudget',
        loadChildren: () =>
          import('../overheadbudget/overheadbudget.module').then(
            (m) => m.OverheadbudgetPageModule,
          ),
      },
      {
        path: 'staffdetails',
        loadChildren: () =>
          import('../staffdetails/staffdetails.module').then(
            (m) => m.StaffdetailsPageModule,
          ),
      },
      {
        path: 'servicetypes',
        loadChildren: () =>
          import('../servicetypes/servicetypes.module').then(
            (m) => m.ServicetypesPageModule,
          ),
      },
      {
        path: 'storecategories',
        loadChildren: () =>
          import('../storecategories/storecategories.module').then(
            (m) => m.StorecategoriesPageModule,
          ),
      },
      {
        path: 'supplierdetails',
        loadChildren: () =>
          import('../supplierdetails/supplierdetails.module').then(
            (m) => m.SupplierdetailsPageModule,
          ),
      },
      {
        path: 'votecodes',
        loadChildren: () =>
          import('../votecodes/votecodes.module').then(
            (m) => m.VotecodesPageModule,
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../users/users.module').then((m) => m.UsersPageModule),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('../reports/reports.module').then((m) => m.ReportsPageModule),
      },
      {
        path: 'usergroups',
        loadChildren: () =>
          import('../usergroups/usergroups.module').then(
            (m) => m.UsergroupsPageModule,
          ),
      },
      {
        path: 'parameters',
        loadChildren: () =>
          import('../parameters/parameters.module').then(
            (m) => m.ParametersPageModule,
          ),
      },
      {
        path: 'servschedultask',
        loadChildren: () =>
          import('../servschedultask/servschedultask.module').then(
            (m) => m.ServschedultaskPageModule,
          ),
      },
      {
        path: 'oiltype',
        loadChildren: () =>
          import('../oiltype/oiltype.module').then((m) => m.OiltypePageModule),
      },
      {
        path: 'fautorespcode',
        loadChildren: () =>
          import('../fautorespcode/fautorespcode.module').then(
            (m) => m.FautorespcodePageModule,
          ),
      },
      {
        path: 'servschedule',
        loadChildren: () =>
          import('../servschedule/servschedule.module').then(
            (m) => m.ServschedulePageModule,
          ),
      },
      {
        path: 'addstaffinfo',
        loadChildren: () =>
          import('../addstaffinfo/addstaffinfo.module').then(
            (m) => m.AddstaffinfoPageModule,
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'main/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('../sign-in/sign-in.module').then((m) => m.SignInPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
