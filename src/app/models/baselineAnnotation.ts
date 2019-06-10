import {AbstractorAssertion} from './abstractorAssertion';

export class BaselineAnnotation {
  id: string;
  baselineId: string;
  applicationId: string;
  taskName: string;
  subject: string;
  finalAssertion: string;
  abstractorAssertions: AbstractorAssertion[];
  meetsApplicationAbstractorQuorum: boolean;
}
