import { createAsyncThunk } from '@reduxjs/toolkit';
import { createContact, deleteContact, getContacts } from 'api/contacts';

export const getContactsThunk = createAsyncThunk('contacts/get', () => {
  return getContacts();
});
export const createContactThunk = createAsyncThunk('contacts/create', body => {
  return createContact(body);
});
export const deleteContactThunk = createAsyncThunk('contacts/create', id => {
  return deleteContact(id);
});
