import {Component, OnInit} from '@angular/core';
import {ChartOptions, ChartPoint} from 'chart.js';
import {Metric} from '../models/metric';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-metric-graph-visualization',
  templateUrl: './metric-graph-visualization.component.html',
  styleUrls: ['./metric-graph-visualization.component.css']
})
export class MetricGraphVisualizationComponent implements OnInit {

  constructor(private service: DashboardService) { }

  chartOptions: ChartOptions = {
    responsive: true,
    showLines: true,
    scales: {
      xAxes: [{
        type: 'time'
      }]
    },
    legend: {
      display: false
    }
  };
  selectedMetricType = this.service.getMetricTypes()[0];

  ngOnInit() {
  }

  renderChartData(metrics: Metric[], type: string): ChartPoint[] {
    const byMetricType = {};
    metrics.forEach(value => {
        if (!byMetricType.hasOwnProperty(value.name)) {
          byMetricType[value.name] = [];
        }
        const arr = byMetricType[value.name] as Array<{}>;
        arr.push({t: value.measuredTime, y: value.value});
      }
    );
    return byMetricType[type] as ChartPoint[];
  }
}
