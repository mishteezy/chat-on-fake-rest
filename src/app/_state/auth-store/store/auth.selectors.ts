import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AUTH_FEATURENAME, AuthState } from './auth.reducer';

export const authFeature = createFeatureSelector<AuthState>(AUTH_FEATURENAME);

export const getUserId = createSelector(authFeature, (state) => state.id);

export const getUsername = createSelector(
  authFeature,
  (state) => state.username
);

export const getError = createSelector(authFeature, (state) => state.error);

export const isAuth = createSelector(getUserId, (id) => !!id);
