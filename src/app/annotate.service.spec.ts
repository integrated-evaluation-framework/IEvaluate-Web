import { TestBed } from '@angular/core/testing';

import { AnnotateService } from './annotate.service';

describe('AnnotateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnotateService = TestBed.get(AnnotateService);
    expect(service).toBeTruthy();
  });
});
