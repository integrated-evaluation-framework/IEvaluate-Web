import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateDetailModalComponent } from './evaluate-detail-modal.component';

describe('EvaluateDetailModalComponent', () => {
  let component: EvaluateDetailModalComponent;
  let fixture: ComponentFixture<EvaluateDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
