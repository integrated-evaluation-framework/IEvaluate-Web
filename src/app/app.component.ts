import {Component, Inject} from '@angular/core';
import {GLOBAL_SESSION_INFO, SessionInfo} from './models/sessioninfo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(@Inject(GLOBAL_SESSION_INFO) private session: SessionInfo) {}
  title = 'Integrated Evaluation Framework - Web Workbench';

  hasAppSelected(): boolean {
    return this.session.getActiveApp() !== null;
  }

  getCurrAppName(): string {
    return this.session.getActiveApp() === null ? 'No Task Selected' : this.session.getActiveApp().name;
  }

  getCurrAppId(): string {
    return this.session.getActiveApp() === null ? null : this.session.getActiveApp().id;
  }
}
