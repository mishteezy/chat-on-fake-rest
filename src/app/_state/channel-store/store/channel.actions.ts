import { createAction, props } from '@ngrx/store';

import { Channel } from 'src/app/models/chat.model';

export const SelectChannel = createAction('[Channel] select', props<Channel>());
