import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Login } from 'src/app/_state/auth-store/store/auth.actions';
import { getError } from 'src/app/_state/auth-store/store/auth.selectors';
import { LoginData } from 'src/app/models/chat.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  private store$ = inject(Store);
  private fb = inject(FormBuilder);

  authError$: Observable<string> = this.store$.select(getError);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  login() {
    if (this.form.valid) {
      this.store$.dispatch(Login(this.form.value as LoginData));
    }
  }
}
