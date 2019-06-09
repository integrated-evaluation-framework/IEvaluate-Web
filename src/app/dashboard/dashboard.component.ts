import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {GLOBAL_SESSION_INFO, SessionInfo} from '../models/sessioninfo';
import {EvaluatedApplication} from '../models/evaluatedApplication';
import {DashboardService} from '../dashboard.service';
import {ChartDataSets, ChartOptions, ChartPoint, ChartScales, ChartType} from 'chart.js';
import {Color, Label, MultiDataSet} from 'ng2-charts';
import {Metric} from '../models/metric';
import {MetricGraphVisualizationComponent} from '../metric-graph-visualization/metric-graph-visualization.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(@Inject(GLOBAL_SESSION_INFO) private session: SessionInfo, private service: DashboardService) {
  }

  model = new MetricGraphVisualizationComponent(this.service);

  ngOnInit() {
  }
}
