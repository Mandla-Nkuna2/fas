import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Chart } from 'chart.js';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

const apiUrl =
  'https://us-central1-fleet-administration-system.cloudfunctions.net/';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  organization = 'InnTee';

  @ViewChild('lineCanvas', { static: true }) lineCanvas;
  @ViewChild('lineCanvas2', { static: true }) lineCanvas2;
  @ViewChild('lineCanvas3', { static: true }) lineCanvas3;
  @ViewChild('lineCanvas4', { static: true }) lineCanvas4;

  bars: any;
  colorArray: any;
  lineChart: any;
  lineChart2: any;
  lineChart3: any;
  lineChart4: any;

  assets: any = [];
  sAssets: any[] = [];
  assetTypes: any;
  assetTypeNames: any;
  makesAndMods: any;
  currentDate = new Date();
  moreDetails = false;
  showIndex: any;
  vehiclesCount = 0;
  vehicles: any = [];
  staff: any;
  expLics = 0;
  abttExpLics = 0;
  revenueVs = [];
  revenueDates = [];
  returnedUser: any;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.getCurrentUser();
    this.lineChartMethod();
    this.lineChartMethod2();
    this.lineChartMethod3();
    this.lineChartMethod4();
  }

  getCurrentUser() {
    this.afAuth.user.subscribe((cUser) => {
      this.getCurrentUserOrg(cUser.email);
    });
  }

  getCurrentUserOrg(email) {
    this.firebaseRepServ.getUser(email).then((mNm) => {
      let user: any = mNm;
      this.organization = user.organization;
      this.returnedUser = user;

      this.onVehiclesCount();
      this.onRevenue();
      this.onTableReps();
      this.onVehicles();
    });
  }

  onMoreDetails(index) {
    this.showIndex = index;
    this.moreDetails = !this.moreDetails;
  }

  onCaptureDate() {
    this.assets.sort((a, b) => {
      return <any>new Date(b.CaptureDate) - <any>new Date(a.CaptureDate);
    });

    for (let i = 0; i < 3; i++) {
      this.sAssets.push(this.assets[i]);
    }
  }

  onTableReps() {
    this.firebaseRepServ.getAssetLeft(this.organization).then((mNm: any) => {
      this.assets = mNm;
      this.onAssetType();
      this.onMakeAndMod();
      this.onCaptureDate();
    });
  }

  onAssetType() {
    this.firebaseGetServ.getItemType(this.organization).then((mNm: any) => {
      this.assetTypes = mNm;

      mNm.forEach((elm) => {
        this.assets.forEach((obj) => {
          if (elm.ItemTypeGuid == obj.ItemTypeGuid) {
            obj.ItemType = elm.ItemTypeNameGuid;
          }
        });
      });
    });
    this.onAssetTypeName();
  }

  onAssetTypeName() {
    this.firebaseGetServ
      .getAssetTypeNameLeft(this.organization)
      .then((mNm: any) => {
        this.assetTypeNames = mNm;

        mNm.forEach((elm) => {
          this.assets.forEach((obj) => {
            if (elm.ItemTypeNameGuid == obj.ItemType) {
              obj.ItemTypeName = elm.ItemTypeName;
            }
          });
        });
      });
  }

  onMakeAndMod() {
    this.firebaseGetServ
      .getAssetMakenModelLeft(this.organization)
      .then((mNm: any) => {
        this.makesAndMods = mNm;

        mNm.forEach((elm) => {
          this.assets.forEach((obj) => {
            if (elm.ItemMakModGuid == obj.ItemMakModGuid) {
              obj.ItemMakMod = elm.ItemMake;
              if (elm.ItemModel) obj.ItemMakMod += ' ' + elm.ItemModel;
            }
          });
        });
      });
  }

  onVehiclesCount() {
    this.popUp.showLoading('loading...').then(() => {
      this.http
        .post(apiUrl + 'getVehiclesCount', { organisation: this.organization })
        .subscribe(
          (res) => {
            this.popUp.dismissLoading();
            this.vehiclesCount = res['val'];
          },
          (err) => {
            this.popUp.dismissLoading().then(() => {
              this.popUp.showAlert('Failed', err);
            });
          },
        );
    });
  }

  onVehicles() {
    this.firebaseRepServ.getFleet(this.organization).then((mNm: any) => {
      this.vehicles = mNm;
      this.onStaffLeft();
      this.onFlMakeAndMod();
    });
  }

  onStaffLeft() {
    this.firebaseRepServ.getStaffleft(this.organization).then((mNm: any) => {
      this.staff = mNm;

      mNm.forEach((elm) => {
        elm.licExpDate = new Date(elm.Lic_ExpDate);
      });

      mNm.forEach((elm) => {
        this.vehicles.forEach((obj) => {
          if (elm.StaffGuid == obj.StaffGuid) {
            obj.staff = elm.StaffFirstName + ' ' + elm.StaffSurname;
            obj.staffId = elm.IDno;
          }
        });
      });
      this.onExpLics();
      this.onAbttExpLics();
    });
  }

  onFlMakeAndMod() {
    this.firebaseGetServ
      .getAssetMakenModelLeft(this.organization)
      .then((mNm: any) => {
        this.makesAndMods = mNm;

        mNm.forEach((elm) => {
          this.vehicles.forEach((obj) => {
            if (elm.ItemMakModGuid == obj.ItemMakModGuid) {
              obj.ItemMakMod = elm.ItemMake;
              if (elm.ItemModel) obj.ItemMakMod += ' ' + elm.ItemModel;
            }
          });
        });
      });
  }

  onExpLics() {
    this.staff.forEach((elm) => {
      if (elm.licExpDate <= new Date()) {
        this.expLics++;
      }
    });
  }

  onAbttExpLics() {
    let cDate = new Date();

    this.staff.forEach((elm) => {
      if (
        elm.licExpDate > cDate &&
        elm.licExpDate <= cDate.setDate(cDate.getDate() + 31)
      ) {
        this.abttExpLics++;
      }
    });
  }

  onRevenue() {
    this.http
      .post(apiUrl + 'getRevenue', { organisation: this.organization })
      .subscribe(
        (res) => {
          let data: any;
          data = res;

          data.sort((a, b) => {
            return <any>new Date(a.RevenueDate) - <any>new Date(b.RevenueDate);
          });

          data.forEach((elm) => {
            this.revenueVs.push(elm.Total);
            this.revenueDates.push(elm.RevenueDate);
          });
          this.lineChartMethod3();
        },
        (err) => {
          this.popUp.showAlert('Failed', err);
        },
      );
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'pie',
      maintainAspectRatio: true,
      responsive: true,
      data: {
        labels: ['On Route', 'Available', 'Need Maintenance'],
        datasets: [
          {
            backgroundColor: ['#3A9863', '#28D975', '#FACD01'],
            borderColor: 'rgba(255,251,251,1)',
            data: [55, 10, 25],
            spanGaps: false,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
      },
    });
  }

  lineChartMethod2() {
    this.lineChart2 = new Chart(this.lineCanvas2.nativeElement, {
      type: 'pie',
      maintainAspectRatio: true,
      responsive: false,
      data: {
        labels: ['Good', 'Average', 'Critical'],
        datasets: [
          {
            backgroundColor: ['#3A9863', '#FACD01', '#FF4747'],
            borderColor: 'rgba(255,251,251,1)',
            data: [75, 10, 35],
            spanGaps: false,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
      },
    });
  }

  lineChartMethod3() {
    this.lineChart3 = new Chart(this.lineCanvas3.nativeElement, {
      type: 'line',
      maintainAspectRatio: false,
      responsive: true,
      data: {
        labels: this.revenueDates,
        datasets: [
          {
            label: 'Income',
            fill: true,
            lineTension: 0.5,
            backgroundColor: '#E6F8EF',
            borderColor: 'rgba(28,199,116,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(28,199,116,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(28,199,116,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 10,
            data: this.revenueVs,
            spanGaps: false,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
              },
              ticks: {
                fontSize: 8,
                display: true,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
              },
              ticks: {
                fontSize: 8,
                beginAtZero: false,
              },
              scaleLabel: {
                labelString: 'US Dollars',
                display: false,
              },
            },
          ],
        },
        legend: {
          align: 'start',
          display: false,
        },
      },
    });
  }

  lineChartMethod4() {
    this.lineChart3 = new Chart(this.lineCanvas4.nativeElement, {
      type: 'line',
      maintainAspectRatio: false,
      responsive: true,
      data: {
        labels: ['12 Sep', '13 Sep', '14 Sep', '15 Sep', '16 Sep'],
        datasets: [
          {
            label: 'Income',
            fill: true,
            lineTension: 0.5,
            backgroundColor: '#F9ECED',
            borderColor: '#E94242',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#E94242',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(28,199,116,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 10,
            data: [],
            spanGaps: false,
          },
        ],
      },
      options: {
        bezierCurve: true,
        scales: {
          xAxes: [
            {
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
              },
              ticks: {
                fontSize: 7,
                display: true,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
              },
              ticks: {
                fontSize: 8,
                beginAtZero: false,
              },
            },
          ],
        },
        legend: {
          align: 'start',
          display: false,
        },
      },
    });
  }
}
