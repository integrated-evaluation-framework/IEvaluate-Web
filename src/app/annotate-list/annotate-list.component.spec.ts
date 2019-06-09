import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotateListComponent } from './annotate-list.component';

describe('AnnotateListComponent', () => {
  let component: AnnotateListComponent;
  let fixture: ComponentFixture<AnnotateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
