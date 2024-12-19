import { TestBed } from '@angular/core/testing';
import { DialogService } from './dialog.service';
import { provideMockStore } from '@ngrx/store/testing';

describe('DialogService', () => {
  let service: DialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogService, provideMockStore({})],
    });
    service = TestBed.inject(DialogService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
