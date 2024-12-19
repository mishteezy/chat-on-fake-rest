import { createAction, props } from '@ngrx/store';

import { LoginData, User } from 'src/app/models/chat.model';
import { AuthState } from './auth.reducer';

export const Login = createAction('[Auth] login', props<LoginData>());

export const LoginSuccess = createAction('[Auth] login success', props<User>());

export const LoginFailed = createAction(
  '[Auth] login failed',
  props<{ error: string }>()
);

export const Logout = createAction('[Auth] logout');

export const LogoutSuccess = createAction('[Auth] logout success');

export const Load = createAction(
  '[Auth] load state from local storage',
  props<AuthState>()
);
