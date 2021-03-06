import {Inject, Injectable, InjectionToken} from '@angular/core';
import {SESSION_STORAGE, StorageService} from 'angular-webstorage-service';
import {EvaluatedApplication} from './evaluatedApplication';
import {User} from './user';
import {MOCK_USER} from '../mocks/mock-user';

export const GLOBAL_SESSION_INFO =
  new InjectionToken<SessionInfo>('GLOBAL_SESSION_INFO');

export const SESSION_KEYS = {
  USER: 'user',
  TASK: 'task'
};

@Injectable()
export class SessionInfo {
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {
  }

  getActiveUser(): User {
    return MOCK_USER;
  }

  setActiveTask(task: EvaluatedApplication) {
    this.storage.set(SESSION_KEYS.TASK, task);
    return;
  }

  getActiveApp(): EvaluatedApplication {
    return this.storage.get(SESSION_KEYS.TASK) as EvaluatedApplication;
  }
}

