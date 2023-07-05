import { instance } from './auth';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};
export const createContact = async body => {
  return await instance.post('/contacts', body);
};
export const deleteContact = async id => {
  return await instance.delete(`/contacts/${id}`);
};
