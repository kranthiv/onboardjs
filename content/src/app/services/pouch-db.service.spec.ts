import { TestBed, inject } from '@angular/core/testing';

import { PouchDBService } from './pouch-db.service';

describe('PouchDBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PouchDBService]
    });
  });

  it('should ...', inject([PouchDBService], (service: PouchDBService) => {
    expect(service).toBeTruthy();
  }));
});
