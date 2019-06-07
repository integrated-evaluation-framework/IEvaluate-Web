import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {GLOBAL_SESSION_INFO, SessionInfo} from '../models/sessioninfo';
import {EvaluatedApplication} from '../models/evaluatedApplication';
import {DashboardService} from '../dashboard.service';
import {ChartDataSets, ChartOptions, ChartPoint, ChartScales, ChartType} from 'chart.js';
import {Color, Label, MultiDataSet} from 'ng2-charts';
import {Metric} from '../models/metric';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(@Inject(GLOBAL_SESSION_INFO) private session: SessionInfo, private service: DashboardService) {
  }

  // Metrics Chart Support
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
  selectedMetricType = '';
  // End Chart Support

  ngOnInit() {
  }

  getEvaluatedApp(): EvaluatedApplication {
    return this.session.getActiveApp();
  }

  // Metrics Chart Support
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
