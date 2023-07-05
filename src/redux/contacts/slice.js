import { getContactsThunk } from './thunks';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};
const handlePending = ({ contacts }) => {
  contacts.isLoading = true;
  contacts.error = '';
};

const handleRejected = ({ contacts }, action) => {
  contacts.isLoading = false;
  contacts.error = action.error.message;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterValue(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, ({ contacts }, { payload }) => {
        contacts.isLoading = false;
        contacts.items = payload;
      })
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const contactReducer = contactSlice.reducer;
export const { filterValue } = contactSlice.actions;
