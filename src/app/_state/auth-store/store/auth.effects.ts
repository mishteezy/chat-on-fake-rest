import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  Login,
  LoginFailed,
  LoginSuccess,
  Logout,
  LogoutSuccess,
} from './auth.actions';

import { RestService } from 'src/app/_services/rest.service';
import { getUserId } from './auth.selectors';

@Injectable()
export class AuthEffects {
  private router = inject(Router);
  private rest = inject(RestService);
  private store$ = inject(Store);
  private actions$ = inject(Actions);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Login),
      switchMap(({ username, password }) =>
        this.rest.login({ username, password }).pipe(
          map((user) => {
            this.router.navigateByUrl('/');
            return LoginSuccess(user);
          }),
          catchError((error) =>
            of(LoginFailed({ error: this.handleLoginError(error) }))
          )
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Logout),
      withLatestFrom(this.store$.select(getUserId)),
      switchMap(([_, id]) =>
        this.rest.logout(id).pipe(
          map(() => {
            this.router.navigateByUrl('/login');
            return LogoutSuccess();
          })
        )
      )
    )
  );

  private handleLoginError(error: string) {
    switch (true) {
      case error.includes('user not found'):
        return 'Invalid login or password';
      default:
        return '';
    }
  }
}
