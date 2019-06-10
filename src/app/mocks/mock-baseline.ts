import {BaselineAnnotation} from '../models/baselineAnnotation';

export const MOCK_BASELINE_ANNS: BaselineAnnotation[] = [
  {
    id: '1',
    baselineId: '1',
    applicationId: '1',
    taskName: 'MOCK_AI_EXTRACTION_1',
    subject: 'MOCK_SUBJECT_1',
    finalAssertion: 'MOCK_ASSERTION_1',
    abstractorAssertions: [
      {
        assertion: 'MOCK_ASSERTION_1',
        abstractorId: '1'
      },
      {
        assertion: 'MOCK_ASSERTION_2',
        abstractorId: '2'
      },
      {
        assertion: 'MOCK_ASSERTION_1',
        abstractorId: '3'
      }
    ],
    meetsApplicationAbstractorQuorum: true
  },
  {
    id: '2',
    baselineId: '1',
    applicationId: '1',
    taskName: 'MOCK_AI_EXTRACTION_1',
    subject: 'MOCK_SUBJECT_2',
    finalAssertion: 'MOCK_ASSERTION_1',
    abstractorAssertions: [
      {
        assertion: 'MOCK_ASSERTION_1',
        abstractorId: '1'
      },
      {
        assertion: 'MOCK_ASSERTION_2',
        abstractorId: '2'
      },
      {
        assertion: 'MOCK_ASSERTION_1',
        abstractorId: '3'
      }
    ],
    meetsApplicationAbstractorQuorum: true
  },
  {
    id: '3',
    baselineId: '1',
    applicationId: '1',
    taskName: 'MOCK_AI_EXTRACTION_1',
    subject: 'MOCK_SUBJECT_3',
    finalAssertion: 'MOCK_ASSERTION_2',
    abstractorAssertions: [
      {
        assertion: 'MOCK_ASSERTION_1',
        abstractorId: '1'
      },
      {
        assertion: 'MOCK_ASSERTION_2',
        abstractorId: '2'
      }
    ],
    meetsApplicationAbstractorQuorum: false
  },
  {
    id: '4',
    baselineId: '1',
    applicationId: '1',
    taskName: 'MOCK_AI_EXTRACTION_2',
    subject: 'MOCK_SUBJECT_1',
    finalAssertion: 'MOCK_ASSERTION_3',
    abstractorAssertions: [
      {
        assertion: 'MOCK_ASSERTION_3',
        abstractorId: '1'
      },
      {
        assertion: 'MOCK_ASSERTION_3',
        abstractorId: '2'
      },
      {
        assertion: 'MOCK_ASSERTION_3',
        abstractorId: '3'
      }
    ],
    meetsApplicationAbstractorQuorum: true
  }
];
