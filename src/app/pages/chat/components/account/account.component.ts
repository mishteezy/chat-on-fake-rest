import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Logout } from 'src/app/_state/auth-store/store/auth.actions';
import { getUsername } from 'src/app/_state/auth-store/store/auth.selectors';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent {
  private router = inject(Router);
  private store$ = inject(Store);

  username$: Observable<string> = this.store$.select(getUsername);

  navigateToUser() {
    this.router.navigateByUrl('user');
  }

  logout() {
    this.store$.dispatch(Logout());
  }
}
