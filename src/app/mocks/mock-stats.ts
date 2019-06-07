import {Metric} from '../models/metric';

export const METRIC_TYPES: string[] = ['f1-score', 'recall', 'precision'];

export const MOCK_METRICS_F1: Metric[] = [
  {
    measuredTime: new Date(2019, 1, 1),
    name: 'f1-score',
    value: 0.05
  },
  {
    measuredTime: new Date(2019, 2, 2),
    name: 'f1-score',
    value: 0.1
  },
  {
    measuredTime: new Date(2019, 3, 4),
    name: 'f1-score',
    value: 0.15
  },
  {
    measuredTime: new Date(2019, 4, 2),
    name: 'f1-score',
    value: 0.25
  },
  {
    measuredTime: new Date(2019, 5, 10),
    name: 'f1-score',
    value: 0.5
  },
  {
    measuredTime: new Date(2019, 5, 15),
    name: 'f1-score',
    value: 0.85
  },
  {
    measuredTime: new Date(2019, 5, 16),
    name: 'f1-score',
    value: 0.9
  },
  {
    measuredTime: new Date(2019, 5, 17),
    name: 'f1-score',
    value: 0.92
  },
  {
    measuredTime: new Date(2019, 6, 16),
    name: 'f1-score',
    value: 0.99
  },
  {
    measuredTime: new Date(2019, 1, 1),
    name: 'recall',
    value: 0.05
  },
  {
    measuredTime: new Date(2019, 2, 2),
    name: 'recall',
    value: 0.1
  },
  {
    measuredTime: new Date(2019, 3, 4),
    name: 'recall',
    value: 0.15
  },
  {
    measuredTime: new Date(2019, 4, 2),
    name: 'recall',
    value: 0.25
  },
  {
    measuredTime: new Date(2019, 5, 10),
    name: 'recall',
    value: 0.5
  },
  {
    measuredTime: new Date(2019, 5, 15),
    name: 'recall',
    value: 0.85
  },
  {
    measuredTime: new Date(2019, 5, 16),
    name: 'recall',
    value: 0.9
  },
  {
    measuredTime: new Date(2019, 5, 17),
    name: 'recall',
    value: 0.92
  },
  {
    measuredTime: new Date(2019, 6, 16),
    name: 'recall',
    value: 0.99
  },
  {
    measuredTime: new Date(2019, 1, 1),
    name: 'precision',
    value: 0.05
  },
  {
    measuredTime: new Date(2019, 2, 2),
    name: 'precision',
    value: 0.1
  },
  {
    measuredTime: new Date(2019, 3, 4),
    name: 'precision',
    value: 0.15
  },
  {
    measuredTime: new Date(2019, 4, 2),
    name: 'precision',
    value: 0.25
  },
  {
    measuredTime: new Date(2019, 5, 10),
    name: 'precision',
    value: 0.5
  },
  {
    measuredTime: new Date(2019, 5, 15),
    name: 'precision',
    value: 0.85
  },
  {
    measuredTime: new Date(2019, 5, 16),
    name: 'precision',
    value: 0.9
  },
  {
    measuredTime: new Date(2019, 5, 17),
    name: 'precision',
    value: 0.92
  },
  {
    measuredTime: new Date(2019, 6, 16),
    name: 'precision',
    value: 0.99
  }
];

export const MOCK_OUTSTANDING_ERRORS = 15;
