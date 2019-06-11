import {Component, Inject, OnInit} from '@angular/core';
import {AnnotateService} from '../annotate.service';
import {BaselineAnnotation} from '../models/baselineAnnotation';
import {GLOBAL_SESSION_INFO, SessionInfo} from '../models/sessioninfo';

@Component({
  selector: 'app-annotate-list',
  templateUrl: './annotate-form.component.html',
  styleUrls: ['./annotate-form.component.css']
})
export class AnnotateFormComponent implements OnInit {

  constructor(@Inject(GLOBAL_SESSION_INFO) private session: SessionInfo, private service: AnnotateService) { }

  currModel: BaselineAnnotation;

  ngOnInit() {
    this.currModel = this.service.generateNewModel();
  }
}
