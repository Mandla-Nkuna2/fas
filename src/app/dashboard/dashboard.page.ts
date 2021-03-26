import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('lineCanvas', {static: true}) lineCanvas;
  @ViewChild('lineCanvas2', {static: true}) lineCanvas2;
  @ViewChild('lineCanvas3', {static: true}) lineCanvas3;
  @ViewChild('lineCanvas4', {static: true}) lineCanvas4;
  bars: any;
  colorArray: any;
  lineChart: any;
  lineChart2: any;
  lineChart3: any;
  lineChart4: any;
  constructor() { }

  ngOnInit() {
    this.lineChartMethod();
    this.lineChartMethod2();
    this.lineChartMethod3();
    this.lineChartMethod4();
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
         
            backgroundColor: ["#3A9863", "#28D975","#FACD01"],
            borderColor: 'rgba(255,251,251,1)',
            data: [55, 10, 25],
            spanGaps: false,
          },
        ]
      },
      options: {
        
      legend: {
        display: false
      }
      }
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
         
            backgroundColor: ["#3A9863", "#FACD01","#FF4747"],
            borderColor: 'rgba(255,251,251,1)',
            data: [75, 10, 35],
            spanGaps: false,
          },
        ]
      },
      options: {
        
      legend: {
        display: false
      }
      }
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
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
          },
              ticks: {
                  fontSize: 8,
                  display: true
              }
          }],
          yAxes: [{
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
          },
              ticks: {
                  fontSize: 8,
                  beginAtZero: false
              }
              ,
              scaleLabel: {
                labelString: 'US Dollars',
                display: false
              }
          },]
      },
      legend: {
        align: 'start',
        display:false
      }
      }
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
          }
        ]
      },
      options: {
        bezierCurve: true,
        scales: {
          xAxes: [{
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
          },
              ticks: {
                  fontSize: 7,
                  display: true
              }
          }],
          yAxes: [{
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
          },
              ticks: {
                  fontSize: 8,
                  beginAtZero: false
              }
          },]
      },
      legend: {
        align: 'start',
        display:false
      }
      }
    });
  }

}
