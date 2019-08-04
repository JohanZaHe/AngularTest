import { TestBed } from '@angular/core/testing';

import { GetCiudadesService } from './get-ciudades.service';

describe('GetCiudadesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCiudadesService = TestBed.get(GetCiudadesService);
    expect(service).toBeTruthy();
  });
});
