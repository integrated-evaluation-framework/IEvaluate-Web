import {Component, Inject, OnInit} from '@angular/core';
import {GLOBAL_SESSION_INFO, SessionInfo} from '../models/sessioninfo';
import {EvaluateService} from '../evaluate.service';

@Component({
  selector: 'app-evaluate-list',
  templateUrl: './evaluate-list.component.html',
  styleUrls: ['./evaluate-list.component.css']
})
export class EvaluateListComponent implements OnInit {

  constructor(@Inject(GLOBAL_SESSION_INFO) private session: SessionInfo, private service: EvaluateService) {
  }

  ngOnInit() {
  }
}
