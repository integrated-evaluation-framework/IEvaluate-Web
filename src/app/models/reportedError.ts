import {BaselineAnnotation} from './baselineAnnotation';

export class ReportedError {
  id: string;
  taskName: string;
  subject: string;
  assertion: string;
  baseline: BaselineAnnotation;
  diagnostics: string[];
}
