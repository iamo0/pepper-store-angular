import { TestBed } from '@angular/core/testing';

import { CatalogData } from './catalog-data';

describe('CatalogData', () => {
  let service: CatalogData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
