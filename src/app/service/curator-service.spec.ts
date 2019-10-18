import { CuratorService } from './curator-service';
import {TestBed} from '@angular/core/testing';

describe('CuratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CuratorService = TestBed.get(CuratorService);
    expect(service).toBeTruthy();
  });
});
