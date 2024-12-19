import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { authFeature } from '../_state/auth-store/store/auth.selectors';
import { filter, tap } from 'rxjs';
import { Load } from '../_state/auth-store/store/auth.actions';

const LS_KEY = 'auth';

@Injectable({ providedIn: 'root' })
export class LSSyncService {
  private store$ = inject(Store);

  private initialized = false;

  init() {
    if (this.initialized) return;

    this.initialized = true;
    this.load();

    return this.store$.select(authFeature).pipe(
      filter((state) => !!state),
      tap((state) => {
        localStorage.setItem(LS_KEY, JSON.stringify(state));
      })
    );
  }

  private load() {
    const state = localStorage.getItem(LS_KEY);
    if (state) this.store$.dispatch(Load(JSON.parse(state)));
  }
}
