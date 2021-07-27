import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
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

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {
    this.onTableRep();
    this.lineChartMethod();
    this.lineChartMethod2();
    this.lineChartMethod3();
    this.lineChartMethod4();
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

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getAssetLeft()
        .then((mNm: any) => {
          this.assets = mNm;
          this.onAssetType();
          this.onMakeAndMod();
          this.onCaptureDate();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onAssetType() {
    this.firebaseGetServ.getItemType().then((mNm: any) => {
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
    this.firebaseGetServ.getAssetTypeNameLeft().then((mNm: any) => {
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
    this.firebaseGetServ.getAssetMakenModelLeft().then((mNm: any) => {
      this.makesAndMods = mNm;

      mNm.forEach((elm) => {
        this.assets.forEach((obj) => {
          if (elm.ItemMakModGuid == obj.ItemMakModGuid) {
            obj.ItemMakMod = elm.ItemMakMod;
          }
        });
      });
    });
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
        labels: ['12 Sep', '13 Sep', '14 Sep', '15 Sep', '16 Sep'],
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
            data: [40, 60, 50, 70, 75],
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
            data: [15, 30, 15, 35, 36],
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
