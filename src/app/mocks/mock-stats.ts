import {Metric} from '../models/metric';

export const METRIC_TYPES: string[] = ['f1-score', 'recall', 'precision'];

export const MOCK_METRICS_F1: Metric[] = [
  {
    measuredTime: new Date(2019, 1, 1),
    name: 'f1-score',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 2, 2),
    name: 'f1-score',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 3, 4),
    name: 'f1-score',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 4, 2),
    name: 'f1-score',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 5, 10),
    name: 'f1-score',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 6, 1),
    name: 'f1-score',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 6, 16),
    name: 'f1-score',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 6, 30),
    name: 'f1-score',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 7, 30),
    name: 'f1-score',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 1, 1),
    name: 'recall',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 2, 2),
    name: 'recall',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 3, 4),
    name: 'recall',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 4, 2),
    name: 'recall',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 5, 10),
    name: 'recall',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 6, 1),
    name: 'recall',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 6, 16),
    name: 'recall',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 6, 30),
    name: 'recall',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 7, 30),
    name: 'recall',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 1, 1),
    name: 'precision',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 2, 2),
    name: 'precision',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 3, 4),
    name: 'precision',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 4, 2),
    name: 'precision',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 5, 10),
    name: 'precision',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 6, 1),
    name: 'precision',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 6, 16),
    name: 'precision',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 6, 30),
    name: 'precision',
    value: Math.random()
  },
  {
    measuredTime: new Date(2019, 7, 30),
    name: 'precision',
    value: Math.random()
  }
];

export const MOCK_OUTSTANDING_ERRORS = Math.random() > 0.75 ? 0 : Math.floor(Math.random() * 100);

export const MOCK_REGRESSION_ERRORS = Math.random() > 0.25 ? 0 : Math.floor(Math.random() * 100);

export const MOCK_APPLICATION_VERSION = 'd22149aa97e2fa2ddf4ccb02364b791f6402fa3a';
export const MOCK_APPLICATION_BUILD_DATE = new Date();
export const MOCK_SCM_NAME = 'Github';
// tslint:disable-next-line:max-line-length
export const MOCK_SCM_URL = 'https://github.com/integrated-evaluation-framework/IEvaluate-Web/commit/d22149aa97e2fa2ddf4ccb02364b791f6402fa3a';

export const MOCK_ERR_RATE: Metric[] = [
  {
    measuredTime: new Date(2019, 5, 16),
    name: 'reportedErrsPerHour',
    value: 10
  },
  {
    measuredTime: new Date(2019, 5, 17),
    name: 'reportedErrsPerHour',
    value: 11
  },
  {
    measuredTime: new Date(2019, 5, 18),
    name: 'reportedErrsPerHour',
    value: 10
  },
  {
    measuredTime: new Date(2019, 5, 19),
    name: 'reportedErrsPerHour',
    value: 12
  },
  {
    measuredTime: new Date(2019, 5, 20),
    name: 'reportedErrsPerHour',
    value: 15
  },
  {
    measuredTime: new Date(2019, 5, 21),
    name: 'reportedErrsPerHour',
    value: 17
  },
  {
    measuredTime: new Date(2019, 5, 22),
    name: 'reportedErrsPerHour',
    value: 19
  },
  {
    measuredTime: new Date(2019, 5, 23),
    name: 'reportedErrsPerHour',
    value: 25
  },
  {
    measuredTime: new Date(2019, 5, 24),
    name: 'reportedErrsPerHour',
    value: 25
  },
  {
    measuredTime: new Date(2019, 5, 25),
    name: 'reportedErrsPerHour',
    value: 25
  },
  {
    measuredTime: new Date(2019, 5, 26),
    name: 'reportedErrsPerHour',
    value: 18
  }
];

export const MOCK_EVAL_STATS = {
  numInstancesInBaseline: 130000,
  cohensKappa: 0.8
};
