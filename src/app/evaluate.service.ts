import {Injectable} from '@angular/core';
import {MOCK_ERRORS} from './mocks/mock-errors';
import {ReportedError} from './models/reportedError';

@Injectable({
  providedIn: 'root'
})
export class EvaluateService {

  constructor() {
  }

  getReportedErrors(): ReportedError[] {
    return MOCK_ERRORS;
  }
}
