import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
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
    },
    {
      title: 'Vehicles',
      url: 'monthlyvehiclereport',
      icon: 'assets/imgs/vehicles.svg',
      icona: 'assets/imgs/vehiclesa.svg',
    },
    {
      title: 'Inspections',
      icon: 'assets/imgs/inspections.svg',
      icona: 'assets/imgs/inspectionsa.svg',
      url: 'licensecor',
    },
    {
      title: 'Maintenance',
      icon: 'assets/imgs/maintain.svg',
      icona: 'assets/imgs/maintaina.svg',
      url: 'repairhistory',
    },
    {
      title: 'Revenue',
      icon: 'assets/imgs/revenue.svg',
      icona: 'assets/imgs/revenuea.svg',
      url: 'revenue',
    },
    {
      title: 'Costs',
      icon: 'assets/imgs/revenue.svg',
      icona: 'assets/imgs/revenuea.svg',
      url: 'revenucosts',
    },
    {
      title: 'Issues',
      icon: 'assets/imgs/issues.svg',
      icona: 'assets/imgs/issuesa.svg',
      url: 'storeissue',
    },
    {
      title: 'Staff',
      icon: 'assets/imgs/users.svg',
      icona: 'assets/imgs/usersa.svg',
      url: 'stafftimesheets',
    },
    {
      title: 'Imports',
      url: 'absaimport',
      icon: 'assets/imgs/asts.svg',
      icona: 'assets/imgs/astsa.svg',
    },
  ];

  showMenu = true;

  constructor(
    private auth: AngularFireAuth,
    private nav: NavController,
    private firebaseService: FirebaseGetService,
  ) {}

  ngOnInit(): void {
    this.loginCheck();
  }

  async loginCheck() {
    this.getUserEmail();
    this.firebaseService.menuEmitter.subscribe((rand) => {
      if (!rand) {
        this.showMenu = false;
        this.nav.navigateRoot('sign-in');
      } else {
        this.getUserName();
        this.getUserEmail();
        this.showMenu = true;
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    });
  }

  getUserEmail() {
    this.auth.user.subscribe((cUser) => {
      if (cUser) {
        this.userEmail = cUser.email;
      }
    });
  }

  getUserName() {
    this.auth.currentUser.then((cu) => {});
  }

  logout() {
    let x = this.auth.signOut();
    this.firebaseService.setloggedInState(false);
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
