import { login, logout, userInfo } from 'api/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginThunk = createAsyncThunk('auth/login', body => {
  return login(body);
});
export const logoutThunk = createAsyncThunk('auth/logout', () => {
  return logout();
});

export const userInfoThunk = createAsyncThunk('auth/user', () => {
  return userInfo();
});
