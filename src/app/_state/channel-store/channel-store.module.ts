import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { CHANNEL_FEATURENAME, channelReducer } from './store/channel.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(CHANNEL_FEATURENAME, channelReducer),
  ],
})
export class ChannelStoreModule {}
