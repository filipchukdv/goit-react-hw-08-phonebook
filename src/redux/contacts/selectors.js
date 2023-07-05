import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contact.contacts.items;
export const selectFilter = state => state.contact.filter;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
