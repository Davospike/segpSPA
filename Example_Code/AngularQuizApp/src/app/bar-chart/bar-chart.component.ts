import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2015',	'2016',	'2017',	'2018',	'2019',	'2020',	'2021'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [11.4,	15.8,	52.3,	40.4,	34.2,	42.7,	32.0], label: 'Fake News Search Trends - UK'},
    {data: [1,	0.9,	1,	1,	1,	27,	9.5], label: 'Coronavirus Search Trends - UK'}
  ];



  ngOnInit(): void {
  }

}
