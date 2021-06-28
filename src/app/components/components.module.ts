import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClickOutsideDirective } from '../shared/clickOutside.directive';
import { DropdownDirective } from '../shared/dropdown.directive';
import { ClickOutsideModule } from 'ng-click-outside';
import { AdditionalcostComponent } from './reports/additionalcost/additionalcost.component';
import { IonicSelectableModule } from 'ionic-selectable';
import { AlternateidComponent } from './reports/alternateid/alternateid.component';
import { ArchivedetComponent } from './reports/archivedet/archivedet.component';
import { AssetlocdrivComponent } from './reports/assetlocdriv/assetlocdriv.component';
import { AssetregComponent } from './reports/assetreg/assetreg.component';
import { AutocarddetComponent } from './reports/autocarddet/autocarddet.component';
import { AutocardhistorydetComponent } from './reports/autocardhistorydet/autocardhistorydet.component';
import { BowserledgerComponent } from './reports/bowserledger/bowserledger.component';
import { BowserledgersumComponent } from './reports/bowserledgersum/bowserledgersum.component';
import { BowsersummaryComponent } from './reports/bowsersummary/bowsersummary.component';
import { BudgetrepComponent } from './reports/budgetrep/budgetrep.component';
import { ChangedregistrationComponent } from './reports/changedregistration/changedregistration.component';
import { ComponentmaintComponent } from './reports/componentmaint/componentmaint.component';
import { CostcentresumComponent } from './reports/costcentresum/costcentresum.component';
import { CostcenttransactComponent } from './reports/costcenttransact/costcenttransact.component';
import { CostingschedulComponent } from './reports/costingschedul/costingschedul.component';
import { CostlistingComponent } from './reports/costlisting/costlisting.component';
import { DailyopsrepComponent } from './reports/dailyopsrep/dailyopsrep.component';
import { DailyopssummComponent } from './reports/dailyopssumm/dailyopssumm.component';
import { ExcessivedowntComponent } from './reports/excessivedownt/excessivedownt.component';
import { FirstautomonComponent } from './reports/firstautomon/firstautomon.component';
import { FirstautoytdComponent } from './reports/firstautoytd/firstautoytd.component';
import { FuelconsumptexcmajeqComponent } from './reports/fuelconsumptexcmajeq/fuelconsumptexcmajeq.component';
import { FuelconsumptexcvehComponent } from './reports/fuelconsumptexcveh/fuelconsumptexcveh.component';
import { FuelconsumptmajorequipComponent } from './reports/fuelconsumptmajorequip/fuelconsumptmajorequip.component';
import { FuelconsumptvehicleComponent } from './reports/fuelconsumptvehicle/fuelconsumptvehicle.component';
import { FuelissuesfleetComponent } from './reports/fuelissuesfleet/fuelissuesfleet.component';
import { FuelissuesitemComponent } from './reports/fuelissuesitem/fuelissuesitem.component';
import { FuelsupppurchComponent } from './reports/fuelsupppurch/fuelsupppurch.component';
import { ItemlochistComponent } from './reports/itemlochist/itemlochist.component';
import { ItemmeterchangComponent } from './reports/itemmeterchang/itemmeterchang.component';
import { ItemmeterreadComponent } from './reports/itemmeterread/itemmeterread.component';
import { JobcardnotcompltComponent } from './reports/jobcardnotcomplt/jobcardnotcomplt.component';
import { JobcardregComponent } from './reports/jobcardreg/jobcardreg.component';
import { LicexpCorSafinspcDatComponent } from './reports/licexp-cor-safinspc-dat/licexp-cor-safinspc-dat.component';
import { ListoflocsComponent } from './reports/listoflocs/listoflocs.component';
import { LogdetailsComponent } from './reports/logdetails/logdetails.component';
import { LosscontrlistingComponent } from './reports/losscontrlisting/losscontrlisting.component';
import { MainteventsComponent } from './reports/maintevents/maintevents.component';
import { MainthistComponent } from './reports/mainthist/mainthist.component';
import { MaintreasonComponent } from './reports/maintreason/maintreason.component';
import { MakmoddetailsComponent } from './reports/makmoddetails/makmoddetails.component';
import { MissingdailyopsrecComponent } from './reports/missingdailyopsrec/missingdailyopsrec.component';
import { MissingmonthlylogsComponent } from './reports/missingmonthlylogs/missingmonthlylogs.component';
import { MonthlyplantComponent } from './reports/monthlyplant/monthlyplant.component';
import { MonthlyvehicleComponent } from './reports/monthlyvehicle/monthlyvehicle.component';
import { OilconsumptmajequipComponent } from './reports/oilconsumptmajequip/oilconsumptmajequip.component';
import { OilconsumptvehicleComponent } from './reports/oilconsumptvehicle/oilconsumptvehicle.component';
import { OilissuesComponent } from './reports/oilissues/oilissues.component';
import { OilstoreledgerComponent } from './reports/oilstoreledger/oilstoreledger.component';
import { OilstoreledgersummComponent } from './reports/oilstoreledgersumm/oilstoreledgersumm.component';
import { OilstoresummComponent } from './reports/oilstoresumm/oilstoresumm.component';
import { OilsupppurchComponent } from './reports/oilsupppurch/oilsupppurch.component';
import { OperatorsummComponent } from './reports/operatorsumm/operatorsumm.component';
import { OverallprofitlossComponent } from './reports/overallprofitloss/overallprofitloss.component';
import { OverheadexpenditureComponent } from './reports/overheadexpenditure/overheadexpenditure.component';
import { RevenuescheduleComponent } from './reports/revenueschedule/revenueschedule.component';
import { RunningcostsmajequipComponent } from './reports/runningcostsmajequip/runningcostsmajequip.component';
import { RunningcostsmetlesequipComponent } from './reports/runningcostsmetlesequip/runningcostsmetlesequip.component';
import { RunningcostsvehiclComponent } from './reports/runningcostsvehicl/runningcostsvehicl.component';
import { ServicedetinquiryComponent } from './reports/servicedetinquiry/servicedetinquiry.component';
import { ServiceoverdueComponent } from './reports/serviceoverdue/serviceoverdue.component';
import { ServiceplanningComponent } from './reports/serviceplanning/serviceplanning.component';
import { ServicerosterComponent } from './reports/serviceroster/serviceroster.component';
import { ServiceschedulelistComponent } from './reports/serviceschedulelist/serviceschedulelist.component';
import { ServicestatusComponent } from './reports/servicestatus/servicestatus.component';
import { StaffaudittrailComponent } from './reports/staffaudittrail/staffaudittrail.component';
import { StaffdailyscheduleComponent } from './reports/staffdailyschedule/staffdailyschedule.component';
import { StaffdetComponent } from './reports/staffdet/staffdet.component';
import { StaffinputtimesComponent } from './reports/staffinputtimes/staffinputtimes.component';
import { StafflicprdpexpdatComponent } from './reports/stafflicprdpexpdat/stafflicprdpexpdat.component';
import { StaffproductivityComponent } from './reports/staffproductivity/staffproductivity.component';
import { StaffregisterComponent } from './reports/staffregister/staffregister.component';
import { StoreisscosphComponent } from './reports/storeisscosph/storeisscosph.component';
import { StoreisscosphmanComponent } from './reports/storeisscosphman/storeisscosphman.component';
import { StoreissuesComponent } from './reports/storeissues/storeissues.component';
import { SubvehlocDrvComponent } from './reports/subvehloc-drv/subvehloc-drv.component';
import { SubvehlogdetComponent } from './reports/subvehlogdet/subvehlogdet.component';
import { SubvehmissinmthlogComponent } from './reports/subvehmissinmthlog/subvehmissinmthlog.component';
import { SubvehstatusComponent } from './reports/subvehstatus/subvehstatus.component';
import { SuppbalComponent } from './reports/suppbal/suppbal.component';
import { SupppurchasesComponent } from './reports/supppurchases/supppurchases.component';
import { SystemmanmajequipComponent } from './reports/systemmanmajequip/systemmanmajequip.component';
import { SystemmanvehComponent } from './reports/systemmanveh/systemmanveh.component';
import { TrafficfinesComponent } from './reports/trafficfines/trafficfines.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClickOutsideModule,
    IonicSelectableModule,
  ],
  declarations: [
    ClickOutsideDirective,
    DropdownDirective,
    AdditionalcostComponent,
    AlternateidComponent,
    ArchivedetComponent,
    AssetlocdrivComponent,
    AssetregComponent,
    AutocarddetComponent,
    AutocardhistorydetComponent,
    BowserledgerComponent,
    BowserledgersumComponent,
    BowsersummaryComponent,
    BudgetrepComponent,
    ChangedregistrationComponent,
    ComponentmaintComponent,
    CostcentresumComponent,
    CostcenttransactComponent,
    CostingschedulComponent,
    CostlistingComponent,
    DailyopsrepComponent,
    DailyopssummComponent,
    ExcessivedowntComponent,
    FirstautomonComponent,
    FirstautoytdComponent,
    FuelconsumptexcmajeqComponent,
    FuelconsumptexcvehComponent,
    FuelconsumptmajorequipComponent,
    FuelconsumptvehicleComponent,
    FuelissuesfleetComponent,
    FuelissuesitemComponent,
    FuelsupppurchComponent,
    ItemlochistComponent,
    ItemmeterchangComponent,
    ItemmeterreadComponent,
    JobcardnotcompltComponent,
    JobcardregComponent,
    LicexpCorSafinspcDatComponent,
    ListoflocsComponent,
    LogdetailsComponent,
    LosscontrlistingComponent,
    MainteventsComponent,
    MainthistComponent,
    MaintreasonComponent,
    MakmoddetailsComponent,
    MissingdailyopsrecComponent,
    MissingmonthlylogsComponent,
    MonthlyplantComponent,
    MonthlyvehicleComponent,
    OilconsumptmajequipComponent,
    OilconsumptvehicleComponent,
    OilissuesComponent,
    OilstoreledgerComponent,
    OilstoreledgersummComponent,
    OilstoresummComponent,
    OilsupppurchComponent,
    OperatorsummComponent,
    OverallprofitlossComponent,
    OverheadexpenditureComponent,
    RevenuescheduleComponent,
    RunningcostsmajequipComponent,
    RunningcostsmetlesequipComponent,
    RunningcostsvehiclComponent,
    ServicedetinquiryComponent,
    ServiceoverdueComponent,
    ServiceplanningComponent,
    ServicerosterComponent,
    ServiceschedulelistComponent,
    ServicestatusComponent,
    StaffaudittrailComponent,
    StaffdailyscheduleComponent,
    StaffdetComponent,
    StaffinputtimesComponent,
    StafflicprdpexpdatComponent,
    StaffproductivityComponent,
    StaffregisterComponent,
    StoreisscosphComponent,
    StoreisscosphmanComponent,
    StoreissuesComponent,
    SubvehlocDrvComponent,
    SubvehlogdetComponent,
    SubvehmissinmthlogComponent,
    SubvehstatusComponent,
    SuppbalComponent,
    SupppurchasesComponent,
    SystemmanmajequipComponent,
    SystemmanvehComponent,
    TrafficfinesComponent,
  ],

  exports: [
    ClickOutsideDirective,
    DropdownDirective,
    AdditionalcostComponent,
    AlternateidComponent,
    ArchivedetComponent,
    AssetlocdrivComponent,
    AssetregComponent,
    AutocarddetComponent,
    AutocardhistorydetComponent,
    BowserledgerComponent,
    BowserledgersumComponent,
    BowsersummaryComponent,
    BudgetrepComponent,
    ChangedregistrationComponent,
    ComponentmaintComponent,
    CostcentresumComponent,
    CostcenttransactComponent,
    CostingschedulComponent,
    CostlistingComponent,
    DailyopsrepComponent,
    DailyopssummComponent,
    ExcessivedowntComponent,
    FirstautomonComponent,
    FirstautoytdComponent,
    FuelconsumptexcmajeqComponent,
    FuelconsumptexcvehComponent,
    FuelconsumptmajorequipComponent,
    FuelconsumptvehicleComponent,
    FuelissuesfleetComponent,
    FuelissuesitemComponent,
    FuelsupppurchComponent,
    ItemlochistComponent,
    ItemmeterchangComponent,
    ItemmeterreadComponent,
    JobcardnotcompltComponent,
    JobcardregComponent,
    LicexpCorSafinspcDatComponent,
    ListoflocsComponent,
    LogdetailsComponent,
    LosscontrlistingComponent,
    MainteventsComponent,
    MainthistComponent,
    MaintreasonComponent,
    MakmoddetailsComponent,
    MissingdailyopsrecComponent,
    MissingmonthlylogsComponent,
    MonthlyplantComponent,
    MonthlyvehicleComponent,
    OilconsumptmajequipComponent,
    OilconsumptvehicleComponent,
    OilissuesComponent,
    OilstoreledgerComponent,
    OilstoreledgersummComponent,
    OilstoresummComponent,
    OilsupppurchComponent,
    OperatorsummComponent,
    OverallprofitlossComponent,
    OverheadexpenditureComponent,
    RevenuescheduleComponent,
    RunningcostsmajequipComponent,
    RunningcostsmetlesequipComponent,
    RunningcostsvehiclComponent,
    ServicedetinquiryComponent,
    ServiceoverdueComponent,
    ServiceplanningComponent,
    ServicerosterComponent,
    ServiceschedulelistComponent,
    ServicestatusComponent,
    StaffaudittrailComponent,
    StaffdailyscheduleComponent,
    StaffdetComponent,
    StaffinputtimesComponent,
    StafflicprdpexpdatComponent,
    StaffproductivityComponent,
    StaffregisterComponent,
    StoreisscosphComponent,
    StoreisscosphmanComponent,
    StoreissuesComponent,
    SubvehlocDrvComponent,
    SubvehlogdetComponent,
    SubvehmissinmthlogComponent,
    SubvehstatusComponent,
    SuppbalComponent,
    SupppurchasesComponent,
    SystemmanmajequipComponent,
    SystemmanvehComponent,
    TrafficfinesComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
