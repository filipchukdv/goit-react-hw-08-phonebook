import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/selectors';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);
  return !isAuth ? <Navigate to={'/login'} /> : children;
};

export default PrivateRoute;
