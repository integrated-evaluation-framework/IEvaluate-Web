import {AbstractorAssertion} from './abstractorAssertion';

export class BaselineAnnotation {
  id: string;
  baselineId: string;
  applicationId: string;
  taskName: string;
  subject: string;
  assertion: AbstractorAssertion[];
  meetsApplicationAbstractorQuorum: boolean;
}
