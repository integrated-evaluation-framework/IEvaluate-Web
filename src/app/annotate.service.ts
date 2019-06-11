import {Inject, Injectable} from '@angular/core';
import {BaselineAnnotation} from './models/baselineAnnotation';
import {GLOBAL_SESSION_INFO, SessionInfo} from './models/sessioninfo';

@Injectable({
  providedIn: 'root'
})
export class AnnotateService {

  constructor(@Inject(GLOBAL_SESSION_INFO) private session: SessionInfo) {
  }

  generateNewModel(): BaselineAnnotation {
    return {
      id: '',
      baselineId: '', // TODO
      applicationId: '', // TODO
      taskName: null,
      subject: '',
      finalAssertion: null,
      abstractorAssertions: [
        {abstractorId: this.session.getActiveUser().id, assertion: ''}
      ],
      meetsApplicationAbstractorQuorum: false
    };
  }
}
