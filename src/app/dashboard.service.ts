import {Inject, Injectable} from '@angular/core';
import {GLOBAL_SESSION_INFO, SessionInfo} from './models/sessioninfo';
import {EvaluatedApplication} from './models/evaluatedApplication';
import {Metric} from './models/metric';
import {METRIC_TYPES, MOCK_METRICS_F1, MOCK_OUTSTANDING_ERRORS} from './mocks/mock-stats';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(@Inject(GLOBAL_SESSION_INFO) private session: SessionInfo) {
  }

  getEvaluatedApp(): EvaluatedApplication {
    return this.session.getActiveApp();
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
    return MOCK_OUTSTANDING_ERRORS;
  }
}
