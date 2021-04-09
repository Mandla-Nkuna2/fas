import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Dashboard',
      url: 'dashboard',
      icon:'assets/imgs/dash.svg',
      icona:'assets/imgs/dasha.svg'
    },
    {
      title: 'Assets',
      url: 'addassetsinfo',
      icon:'assets/imgs/asts.svg',
      icona:'assets/imgs/astsa.svg',
      children:[
        {
          title: 'Add Information',
          url: 'addassetsinfo',
        },
        {
          title: 'Information',
          url: 'assetsinfo',
        },
        {
          title: 'Asset Details',
          url: 'assetdetail',
        },
        {
          title: 'Add Assets',
          url: 'addassets',
        }
      ]
    },
    {
      title: 'Vehicles',
      url: '',
      icon:'assets/imgs/vehicles.svg',
      icona:'assets/imgs/vehiclesa.svg',
      children:[
        {
          title: 'Fleet',
          url: 'fleet',
        },
        {
          title: 'Daily Operations',
          url: 'dailyoperations',
        },
        {
          title: 'System Management',
          url: 'systemmanagement',
        },
      ]
    },
    {
      title: 'Trips',
      url: '',
      icon:'assets/imgs/trips.svg',
      icona:'assets/imgs/tripsa.svg',
      children:[
        {
          title: 'Send Messege',
          url: 'sendmsg',
        },
      ]
    },
    {
      title: 'Inspections',
      icon:'assets/imgs/inspections.svg',
      icona:'assets/imgs/inspectionsa.svg',
      url: 'monthlyvehiclereport',
      children:[
        {
          title: 'Monthly Vehicle Report',
          url: 'monthlyvehiclereport',
        },
        {
          title: 'Tyre Tracking',
          url: 'tiretracking',
        },
      ]
    },
    {
      title: 'Maintenance',
      icon:'assets/imgs/maintain.svg',
      icona:'assets/imgs/maintaina.svg',
      children:[
        {
          title: 'Job Card',
          url: 'jobcard',
        },
        {
          title: 'Repair History',
          url: 'repairhistory',
        },
        {
          title: 'Servicing',
          url: 'servicing',
        },
      ]
    },
    {
      title: 'Revenue',
      icon:'assets/imgs/revenue.svg',
      icona:'assets/imgs/revenuea.svg',
      url:'revenueearned',
      children:[
        {
          title: 'Revenue Earned',
          url: 'revenueearned',
        },
        {
          title: 'Costs',
          url: 'revenucosts',
        }
      ]
    },
    {
      title: 'Issues',
      icon:'assets/imgs/issues.svg',
      icona:'assets/imgs/issuesa.svg',
      url:'trafficfine',
      children:[
        {
          title: 'Add Information',
          url: 'addissuesinfo',
        },
        {
          title: 'Accident Management',
          url: 'accidentmanagement',
        },
        {
          title: 'Traffic Fines',
          url: 'trafficfine',
        }
      ]
    },
    {
      title: 'Users',
      icon:'assets/imgs/users.svg',
      icona:'assets/imgs/usersa.svg',
      children:[
        {
          title: 'Staff Productivity Report',
          url: 'staffproreport',
        },
        {
          title: 'Schedule',
          url: 'schedulestprorepo',
        },
        {
          title: 'Staff Audit Trail',
          url: 'staffaudittrail',
        },
        {
          title: 'Drivers Licence',
          url: 'driverslicense',
        }
      ]
    },
    {
      title: 'Fuel',
      icon:'assets/imgs/fuel.svg',
      icona:'assets/imgs/fuela.svg',
      children:[
        {
          title: 'Fuel Consumption',
          url: 'fuelconsumption',
        },
        {
          title: 'Fuel Bowser & Oil Store Control',
          url: 'fuelbrowsenoilctrl',
        }
      ]
    },
  ];
  showMenu = false;
  constructor(
    private storage: Storage,
    private auth: AngularFireAuth,
    private nav: NavController
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginCheck();
  }
  loginCheck()  {
    let x = this.auth.authState;
    console.log('this is the mmmmm');
    x.subscribe((rand) => {
      console.log(rand);
      if (!rand) {
        this.showMenu = false;
        this.nav.navigateRoot('sign-in');
      }
      else  {
        this.showMenu = true;
      }
    })
  }
}
