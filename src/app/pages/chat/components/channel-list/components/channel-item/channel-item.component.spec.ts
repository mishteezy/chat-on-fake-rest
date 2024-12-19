import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChannelItemComponent } from './channel-item.component';

describe('ChannelItemComponent', () => {
  let component: ChannelItemComponent;
  let fixture: ComponentFixture<ChannelItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ChannelItemComponent]
    });
    fixture = TestBed.createComponent(ChannelItemComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
