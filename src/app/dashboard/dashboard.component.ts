import {Component, Inject, OnInit} from '@angular/core';
import {GLOBAL_SESSION_INFO, SessionInfo} from '../models/sessioninfo';
import {DashboardService} from '../dashboard.service';
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
