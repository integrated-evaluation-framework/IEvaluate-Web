import {Component, Inject, OnInit} from '@angular/core';
import {EvaluatedApplication} from '../models/evaluatedApplication';
import {GLOBAL_SESSION_INFO, SessionInfo} from '../models/sessioninfo';
import {ApplicationListService} from '../application-list.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  constructor(@Inject(GLOBAL_SESSION_INFO) private session: SessionInfo, private appService: ApplicationListService) {}

  ngOnInit() {
  }

  getApps(): EvaluatedApplication[] {
    return this.appService.getApps();
  }

  openApp(task: EvaluatedApplication) {
    this.session.setActiveTask(task);
  }
}
