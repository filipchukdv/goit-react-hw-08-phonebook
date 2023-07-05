import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const signUp = async body => {
  return await instance.post('/users/signup', body);
};

export const login = async body => {
  const { data } = await instance.post('/users/login', body);
  if ('token' in data) setToken(data.token);
  return data;
};

export const logout = async () => {
  return await instance.post('/users/logout');
};

export const userInfo = async () => {
  const { data } = await instance.get('/users/current');
  return data;
};
