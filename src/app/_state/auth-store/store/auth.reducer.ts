import { createReducer, on } from '@ngrx/store';

import {
  Load,
  Login,
  LoginFailed,
  LoginSuccess,
  Logout,
  LogoutSuccess,
} from './auth.actions';

export interface AuthState {
  id: string;
  username: string;
  error: string;
}

const initialState: AuthState = {
  id: '',
  username: '',
  error: '',
};

export const AUTH_FEATURENAME = 'auth';

export const authReducer = createReducer(
  initialState,
  on(Login, (state) => state),
  on(LoginSuccess, (_, { id, username }) => ({
    id,
    username,
    error: '',
  })),
  on(LoginFailed, (_, { error }) => ({
    ...initialState,
    error,
  })),
  on(Logout, (state) => state),
  on(LogoutSuccess, (_) => initialState),
  on(Load, (_, loadedState) => loadedState)
);
