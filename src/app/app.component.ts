import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { first } from 'rxjs/operators';
import { FirebaseGetService } from './services/firebase-service/firebase-get.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public selectedIndex = 0;
  userEmail: string;
  uid: string;
  authState: any;

  public appPages = [
    {
      title: 'Dashboard',
      url: 'dashboard',
      icon: 'assets/imgs/dash.svg',
      icona: 'assets/imgs/dasha.svg',
    },
    {
      title: 'Assets',
      url: 'assetdetail',
      icon: 'assets/imgs/asts.svg',
      icona: 'assets/imgs/astsa.svg',
      // children:[
      //   {
      //     title: 'Asset Details',
      //     url: 'assetdetail',
      //   },
      //   {
      //     title: 'Information',
      //     url: 'assetsinfo',
      //   },
      //   {
      //     title: 'Add Assets',
      //     url: 'addassets',
      //   },
      //   {
      //     title: 'Add Information',
      //     url: 'addassetsinfo',
      //   },
      //   {
      //     title: 'Asset components',
      //     url: 'itemcomponents',
      //   },
      //   {
      //     title: 'Loss control',
      //     url: 'losscontrol',
      //   },
      // ]
    },
    {
      title: 'Vehicles',
      url: 'fleet',
      icon: 'assets/imgs/vehicles.svg',
      icona: 'assets/imgs/vehiclesa.svg',
      // children:[
      //   {
      //     title: 'Fleet',
      //     url: 'fleet',
      //   },
      //   {
      //     title: 'Daily Operations',
      //     url: 'dailyoperations',
      //   },
      //   {
      //     title: 'dailyoperationrecord',
      //     url: 'dailyoperationrecord',
      //   },
      //   {
      //     title: 'System Management',
      //     url: 'systemmanagement',
      //   },
      // ]
    },
    // {
    //   title: 'Trips',
    //   url: '',
    //   icon:'assets/imgs/trips.svg',
    //   icona:'assets/imgs/tripsa.svg',
    //   // children:[
    //   //   {
    //   //     title: 'Send Messege',
    //   //     url: 'sendmsg',
    //   //   },
    //   // ]
    // },
    {
      title: 'Inspections',
      icon: 'assets/imgs/inspections.svg',
      icona: 'assets/imgs/inspectionsa.svg',
      url: 'monthlyvehiclereport',
      // children:[
      //   {
      //     title: 'Monthly Vehicle Report',
      //     url: 'monthlyvehiclereport',
      //   },
      //   {
      //     title: 'Tyre Tracking',
      //     url: 'tiretracking',
      //   },
      //   {
      //     title: 'licensecor',
      //     url: 'licensecor',
      //   },
      // ]
    },
    {
      title: 'Maintenance',
      icon: 'assets/imgs/maintain.svg',
      icona: 'assets/imgs/maintaina.svg',
      url: 'repairhistory',
      // children:[
      //   {
      //     title: 'Repair History',
      //     url: 'repairhistory',
      //   },
      //   {
      //     title: 'Job Card',
      //     url: 'jobcard',
      //   },
      //   {
      //     title: 'maintaincevent',
      //     url: 'maintaincevent',
      //   },
      //   {
      //     title: 'Servicing',
      //     url: 'servicing',
      //   },
      // ]
    },
    {
      title: 'Revenue',
      icon: 'assets/imgs/revenue.svg',
      icona: 'assets/imgs/revenuea.svg',
      url: 'revenue',
      // children:[
      //   {
      //     title: 'Revenue Earned',
      //     url: 'revenueearned',
      //   },
      // ]
    },
    {
      title: 'Costs',
      icon: 'assets/imgs/revenue.svg',
      icona: 'assets/imgs/revenuea.svg',
      url: 'revenucosts',
      // children:[
      //   {
      //     title: 'fixedcostdetails',
      //     url: 'fixedcostdetails',
      //   },
      //   {
      //     title: 'fixedcostransfer',
      //     url: 'fixedcostransfer',
      //   },
      //   {
      //     title: 'overheadtrans',
      //     url: 'overheadtrans',
      //   },
      //   {
      //     title: 'Additional Costs',
      //     url: 'additionalcosts',
      //   },
      //   {
      //     title: 'supdeposit',
      //     url: 'supdeposit',
      //   },
      //   {
      //     title: 'Traffic Fines',
      //     url: 'trafficfine',
      //   },
      // ]
    },
    {
      title: 'Issues',
      icon: 'assets/imgs/issues.svg',
      icona: 'assets/imgs/issuesa.svg',
      url: 'storeissue',
      // children:[
      //   {
      //     title: 'storeissue',
      //     url: 'storeissue',
      //   },
      //   {
      //     title: 'Add Information',
      //     url: 'addissuesinfo',
      //   },
      //   {
      //     title: 'Accident Management',
      //     url: 'accidentmanagement',
      //   },
      //   {
      //     title: 'oilissues',
      //     url: 'oilissues',
      //   },
      //   {
      //     title: 'fuelissues',
      //     url: 'fuelissues',
      //   },
      //   {
      //     title: 'oilstoretrans',
      //     url: 'oilstoretrans',
      //   },
      //   {
      //     title: 'oiltransafer',
      //     url: 'oiltransafer',
      //   },
      //   {
      //     title: 'bowsertransactions',
      //     url: 'browsertransactions',
      //   },
      //   {
      //     title: 'bowsertransfer',
      //     url: 'browsertransfer',
      //   },
      // ]
    },
    {
      title: 'Staff',
      icon: 'assets/imgs/users.svg',
      icona: 'assets/imgs/usersa.svg',
      url: 'stafftimesheets',
      // children:[
      //   {
      //     title: 'Staff Audit Trail',
      //     url: 'staffaudittrail',
      //   },
      //   {
      //     title: 'Staff Productivity Report',
      //     url: 'staffproreport',
      //   },
      //   {
      //     title: 'Schedule',
      //     url: 'schedulestprorepo',
      //   },
      //   {
      //     title: 'Drivers Licence',
      //     url: 'driverslicense',
      //   },
      // ]
    },
    {
      title: 'Imports',
      url: 'absaimport',
      icon: 'assets/imgs/asts.svg',
      icona: 'assets/imgs/astsa.svg',
      // children:[
      //   {
      //     title: 'absaimport',
      //     url: 'absaimport',
      //   },
      //   {
      //     title: 'fueltransimport',
      //     url: 'fueltransimport',
      //   },
      //   {
      //     title: 'importlogtransfor',
      //     url: 'importlogtransfor',
      //   },
      //   {
      //     title: 'importfirstautotrans',
      //     url: 'importfirstautotrans',
      //   },
      //   {
      //     title: 'importgeotab',
      //     url: 'importgeotab',
      //   },
      //   {
      //     title: 'stannicimport',
      //     url: 'stannicimport',
      //   },
      // ]
    },
    // {
    //   title: 'Fuel',
    //   icon:'assets/imgs/fuel.svg',
    //   icona:'assets/imgs/fuela.svg',
    //   children:[
    //     {
    //       title: 'Fuel Consumption',
    //       url: 'fuelconsumption',
    //     },
    //     {
    //       title: 'Fuel Bowser & Oil Store Control',
    //       url: 'fuelbrowsenoilctrl',
    //     }
    //   ]
    // },
  ];

  showMenu = true;

  constructor(
    private storage: Storage,
    private auth: AngularFireAuth,
    private nav: NavController,
    private firebaseGetServ: FirebaseGetService,
  ) {}

  ngOnInit(): void {
    this.loginCheck();
  }

  loginCheck() {
    let x = this.auth.authState;
    x.subscribe((rand) => {
      if (!rand) {
        this.showMenu = false;
        this.nav.navigateRoot('sign-in');
      } else {
        this.showMenu = true;
        this.getUserEmail();
        this.getUserName();
      }
    });
  }

  getUserEmail() {
    this.auth.currentUser.then((cu) => {
      this.userEmail = cu.email;
    });
  }

  getUserName() {
    this.auth.currentUser.then((cu) => {});
  }

  logout() {
    let x = this.auth.signOut();
  }

  goAddAssetsInfo() {
    this.nav.navigateForward('assetdetail');
  }

  goFleet() {
    this.nav.navigateForward('fleet');
  }

  goMaintanance() {
    this.nav.navigateForward('jobcard');
  }

  goRevenue() {
    this.nav.navigateForward('revenue');
  }

  goCosts() {
    this.nav.navigateForward('revenucosts');
  }

  goIssues() {
    this.nav.navigateForward('addissuesinfo');
  }

  goStaff() {
    this.nav.navigateForward('stafftimesheets');
  }

  goImports() {
    this.nav.navigateForward('autocardetails');
  }
}
