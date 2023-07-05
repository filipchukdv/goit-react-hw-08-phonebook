import { loginThunk, logoutThunk, userInfoThunk } from './thunk';
import { toast } from 'react-hot-toast';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
  isAuth: false,
  email: '',
};

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
  toast.error(action.error.message);
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.access_token = payload.token;
        state.isAuth = true;
        state.isLoading = false;
        state.email = payload.user.email;
        toast.success(`Welcome ${payload.user.email}`);
      })
      .addCase(userInfoThunk.fulfilled, (state, { payload }) => {
        state.isAuth = true;
        state.isLoading = false;
        state.email = payload.email;
      })
      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        state.isAuth = false;
        state.isLoading = false;
        state.access_token = '';
      })
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
