import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselineExplorerComponent } from './baseline-explorer.component';

describe('BaselineExplorerComponent', () => {
  let component: BaselineExplorerComponent;
  let fixture: ComponentFixture<BaselineExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaselineExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaselineExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
