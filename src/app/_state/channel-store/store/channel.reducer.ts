import { createReducer, on } from '@ngrx/store';

import { Channel } from 'src/app/models/chat.model';
import { SelectChannel } from './channel.actions';

export const CHANNEL_FEATURENAME = 'channel';

const initialState: Channel = {
  id: '',
  name: '',
  messages: [],
};

export const channelReducer = createReducer(
  initialState,
  on(SelectChannel, (_, channel) => channel)
);
