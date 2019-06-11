import {ReportedError} from '../models/reportedError';
import {MOCK_BASELINE_ANNS} from './mock-baseline';

export const MOCK_ERRORS: ReportedError[] = [
  {
    id: '1',
    taskName: 'MOCK_AI_EXTRACTION_1',
    subject: 'MOCK_SUBJECT_1',
    assertion: 'MOCK_ASSERTION_3',
    baseline: MOCK_BASELINE_ANNS[0],
    diagnostics: [
      'Mock diagnostic string that lead to this assertion 1',
      'Mock diagnostic string that lead to this assertion 2',
      'Mock diagnostic string that lead to this assertion 3',
      'Mock diagnostic string that lead to this assertion 4',
      'Mock diagnostic string that lead to this assertion 5'
    ]
  },
  {
    id: '2',
    taskName: 'MOCK_AI_INFERENCE_1',
    subject: 'MOCK_SUBJECT_1',
    assertion: 'MOCK_REPORTED_ASSERTION_2',
    baseline: null,
    diagnostics: [
      'Mock diagnostic string that lead to this assertion 1',
      'Mock diagnostic string that lead to this assertion 2',
      'Mock diagnostic string that lead to this assertion 3',
      'Mock diagnostic string that lead to this assertion 4',
      'Mock diagnostic string that lead to this assertion 5'
    ]
  },
  {
    id: '3',
    taskName: 'MOCK_AI_EXTRACTION_1',
    subject: 'MOCK_SUBJECT_3',
    assertion: 'MOCK_PARTIALLY_JUDGED_ASSERTION_2',
    baseline: MOCK_BASELINE_ANNS[2],
    diagnostics: [
      'Mock diagnostic string that lead to this assertion 1',
      'Mock diagnostic string that lead to this assertion 2',
      'Mock diagnostic string that lead to this assertion 3',
      'Mock diagnostic string that lead to this assertion 4',
      'Mock diagnostic string that lead to this assertion 5'
    ]
  },
  {
    id: '4',
    taskName: 'MOCK_AI_EXTRACTION_2',
    subject: 'MOCK_SUBJECT_1',
    assertion: 'MOCK_ASSERTION_2',
    baseline: MOCK_BASELINE_ANNS[3],
    diagnostics: [
      'Mock diagnostic string that lead to this assertion 1',
      'Mock diagnostic string that lead to this assertion 2',
      'Mock diagnostic string that lead to this assertion 3',
      'Mock diagnostic string that lead to this assertion 4',
      'Mock diagnostic string that lead to this assertion 5'
    ]
  }
];
