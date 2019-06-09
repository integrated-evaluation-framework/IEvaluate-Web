import {Inject, Injectable} from '@angular/core';
import {GLOBAL_SESSION_INFO, SessionInfo} from './models/sessioninfo';
import {Metric} from './models/metric';
import {
  METRIC_TYPES,
  MOCK_APPLICATION_BUILD_DATE,
  MOCK_APPLICATION_VERSION,
  MOCK_METRICS_F1,
  MOCK_OUTSTANDING_ERRORS,
  MOCK_REGRESSION_ERRORS, MOCK_SCM_NAME, MOCK_SCM_URL
} from './mocks/mock-stats';
import {MetricGraphVisualizationComponent} from './metric-graph-visualization/metric-graph-visualization.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(@Inject(GLOBAL_SESSION_INFO) private session: SessionInfo) {
  }


  getMetricTypes(): string[] {
    return METRIC_TYPES;
  }

  getMetrics(num: number): Metric[] {
    return MOCK_METRICS_F1;
  }

  getNewErrors(): number {
    return MOCK_OUTSTANDING_ERRORS;
  }

  getNumErrorsAgainstGold(): number {
    return MOCK_REGRESSION_ERRORS;
  }

  getApplicationBuildVersion() {
    return MOCK_APPLICATION_VERSION;
  }

  getApplicationBuildDate() {
    return MOCK_APPLICATION_BUILD_DATE;
  }
  getApplicationSCNName() {
    return MOCK_SCM_NAME;
  }
  getApplicationSCMUrl() {
    return MOCK_SCM_URL;
  }

  getEvaluationMetrics() {
    return
  }
}
