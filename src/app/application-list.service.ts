import {Injectable} from '@angular/core';
import {EvaluatedApplication} from './models/evaluatedApplication';
import {MOCK_APPS} from './mocks/mock-apps';

@Injectable({
  providedIn: 'root'
})
export class ApplicationListService {
  constructor() {
  }

  getApps(): EvaluatedApplication[] {
    return MOCK_APPS;
  }
}
