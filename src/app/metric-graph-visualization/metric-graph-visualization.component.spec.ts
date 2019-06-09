import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricGraphVisualizationComponent } from './metric-graph-visualization.component';

describe('MetricGraphVisualizationComponent', () => {
  let component: MetricGraphVisualizationComponent;
  let fixture: ComponentFixture<MetricGraphVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricGraphVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricGraphVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
