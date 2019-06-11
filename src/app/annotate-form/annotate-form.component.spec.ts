import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotateFormComponent } from './annotate-form.component';

describe('AnnotateFormComponent', () => {
  let component: AnnotateFormComponent;
  let fixture: ComponentFixture<AnnotateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
