import {Injectable} from '@angular/core';
import {BaselineCorpus} from './models/baselineCorpus';
import {MOCK_BASELINE_CORPORA} from './mocks/mock-baseline';

@Injectable({
  providedIn: 'root'
})
export class BaselinesService {

  constructor() {
  }

  getBaselineCorpora(): BaselineCorpus[] {
    return MOCK_BASELINE_CORPORA;
  }
}
