import { inject, Injectable } from '@angular/core';

import { switchMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';

import { getUsername } from 'src/app/_state/auth-store/store/auth.selectors';
import { getChannelId } from 'src/app/_state/channel-store/store/channel.selectors';
import { SelectChannel } from '../../../../../_state/channel-store/store/channel.actions';
import { RestService } from '../../../../../_services/rest.service';

@Injectable()
export class DialogService {
  private store$ = inject(Store);
  private rest = inject(RestService);

  selectChannel(id: string) {
    return this.rest.getDialog(id).pipe(
      tap((dialog) => {
        this.store$.dispatch(SelectChannel(dialog));
      })
    );
  }

  sendMessage(message: string) {
    const username = this.store$.selectSignal(getUsername)();
    const channelId = this.store$.selectSignal(getChannelId)();

    return this.rest
      .sendMessage(channelId, username, message)
      .pipe(switchMap(() => this.selectChannel(channelId)));
  }
}
