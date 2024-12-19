import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Channel } from 'src/app/models/chat.model';
import { CHANNEL_FEATURENAME } from './channel.reducer';

export const getChannel = createFeatureSelector<Channel>(CHANNEL_FEATURENAME);

export const getChannelId = createSelector(getChannel, (ch) => ch.id);
