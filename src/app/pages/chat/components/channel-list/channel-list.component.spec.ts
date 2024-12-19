import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChannelListComponent } from './channel-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DialogService } from '../dialog/services/dialog.service';
import { provideMockStore } from '@ngrx/store/testing';

describe('ChannelListComponent', () => {
  let component: ChannelListComponent;
  let fixture: ComponentFixture<ChannelListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ChannelListComponent],
      providers: [DialogService, provideMockStore({})],
    });
    fixture = TestBed.createComponent(ChannelListComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
