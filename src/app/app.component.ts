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
      url: 'main/dashboard',
      icon: 'assets/imgs/dash.svg',
      icona: 'assets/imgs/dasha.svg',
    },
    {
      title: 'Assets',
      url: 'main/assetdetail',
      icon: 'assets/imgs/asts.svg',
      icona: 'assets/imgs/astsa.svg',
    },
    {
      title: 'Vehicles',
      url: 'main/monthlyvehiclereport',
      icon: 'assets/imgs/vehicles.svg',
      icona: 'assets/imgs/vehiclesa.svg',
    },
    {
      title: 'Inspections',
      icon: 'assets/imgs/inspections.svg',
      icona: 'assets/imgs/inspectionsa.svg',
      url: 'main/licensecor',
    },
    {
      title: 'Maintenance',
      icon: 'assets/imgs/maintain.svg',
      icona: 'assets/imgs/maintaina.svg',
      url: 'main/repairhistory',
    },
    {
      title: 'Revenue',
      icon: 'assets/imgs/revenue.svg',
      icona: 'assets/imgs/revenuea.svg',
      url: 'main/revenue',
    },
    {
      title: 'Costs',
      icon: 'assets/imgs/revenue.svg',
      icona: 'assets/imgs/revenuea.svg',
      url: 'main/revenucosts',
    },
    {
      title: 'Issues',
      icon: 'assets/imgs/issues.svg',
      icona: 'assets/imgs/issuesa.svg',
      url: 'main/storeissue',
    },
    {
      title: 'Staff',
      icon: 'assets/imgs/users.svg',
      icona: 'assets/imgs/usersa.svg',
      url: 'main/stafftimesheets',
    },
    {
      title: 'Imports',
      url: 'main/absaimport',
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
    this.auth.authState.subscribe((menu) => {
      if (menu) {
        this.getUserEmail();
        this.showMenu = true;
        this.firebaseService.menuEmitter.subscribe((rand) => {
          setTimeout(() => {
            window.location.reload();
          }, 500);
        });
      } else {
        this.showMenu = false;
        this.nav.navigateRoot('main/sign-in');
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
    this.auth.signOut();
  }
}
