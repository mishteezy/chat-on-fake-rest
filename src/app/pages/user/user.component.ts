import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { getUsername } from 'src/app/_state/auth-store/store/auth.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  private store$ = inject(Store);
  private router = inject(Router);

  username$ = this.store$.select(getUsername);

  navigateBack() {
    this.router.navigateByUrl('/');
  }
}
