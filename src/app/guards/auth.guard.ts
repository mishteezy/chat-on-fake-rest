import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { map, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { isAuth } from '../_state/auth-store/store/auth.selectors';

@Injectable()
export class AuthGuard implements CanActivate {
  private store$ = inject(Store);
  private router = inject(Router);

  canActivate(): Observable<boolean> {
    return this.store$.pipe(
      select(isAuth),
      map((auth) => {
        if (auth) {
          return true;
        } else {
          this.router.navigateByUrl('/login');
          return false;
        }
      })
    );
  }
}
