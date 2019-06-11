import {Component, Inject, OnInit, TemplateRef} from '@angular/core';
import {BaselinesService} from '../baselines.service';
import {BaselineCorpus} from '../models/baselineCorpus';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {BaselineAnnotation} from '../models/baselineAnnotation';
import {GLOBAL_SESSION_INFO, SessionInfo} from '../models/sessioninfo';

@Component({
  selector: 'app-baseline-explorer',
  templateUrl: './baseline-explorer.component.html',
  styleUrls: ['./baseline-explorer.component.css']
})
export class BaselineExplorerComponent implements OnInit {

  constructor(@Inject(GLOBAL_SESSION_INFO) private session: SessionInfo,
              private service: BaselinesService,
              private modalService: BsModalService) {
  }

  modalBaselineDetailsRef: BsModalRef;
  modalAnnotationsRef: BsModalRef;
  modalAddAssertionRef: BsModalRef;
  exploredCorpus: BaselineCorpus;
  currAnnotation: BaselineAnnotation;
  assertionToAdd: string;

  ngOnInit() {
  }

  openBaselineDetailsModal(template: TemplateRef<any>, corpus: BaselineCorpus) {
    this.exploredCorpus = corpus;
    this.modalBaselineDetailsRef = this.modalService.show(template, {
      animated: true,
      keyboard: false,
      class: 'modal-xl',
      ignoreBackdropClick: true
    });
  }

  closeBaselineDetailsModal() {
    this.exploredCorpus = null;
    this.modalBaselineDetailsRef.hide();
  }

  openAbstractorAnnotationModal(template: TemplateRef<any>, detailItemExplore: BaselineAnnotation) {
    this.currAnnotation = detailItemExplore;
    this.modalAnnotationsRef = this.modalService.show(template, {
      animated: true,
      keyboard: false,
      class: 'modal-lg',
      ignoreBackdropClick: true
    });
  }

  closeAbstractorAnnotationDetailsModal() {
    this.currAnnotation = null;
    this.modalAnnotationsRef.hide();
  }

  openAddToBaselineModal(template: TemplateRef<any>, annotation: BaselineAnnotation) {
    this.currAnnotation = annotation;
    this.assertionToAdd = '';
    this.modalAddAssertionRef = this.modalService.show(template, {
      animated: true,
      keyboard: false,
      ignoreBackdropClick: true
    });
  }

  closeAddToBaselineModal() {
    this.assertionToAdd = '';
    this.modalAddAssertionRef.hide();
  }
}
