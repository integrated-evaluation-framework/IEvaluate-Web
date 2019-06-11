import {BaselineAnnotation} from './baselineAnnotation';

export class ReportedError {
  id: string;
  taskName: string;
  errorTime: Date;
  subject: string;
  assertion: string;
  baseline: BaselineAnnotation;
  diagnostics: string[];
}
