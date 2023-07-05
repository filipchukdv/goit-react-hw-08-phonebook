// import Header from './Header/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Contacts from 'pages/Contacts/Contacts';
import { Toaster } from 'react-hot-toast';
import PublicRoute from './PublicRoute/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail, selectToken } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { userInfoThunk } from 'redux/auth/thunk';
import { setToken } from 'api/auth';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const App = () => {
  const access_token = useSelector(selectToken);
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();

  useEffect(() => {
    if (access_token && !email) {
      setToken(access_token);
      dispatch(userInfoThunk());
    }
  }, [access_token, email, dispatch]);

  return (
    <>
      <Toaster />
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/contacts" />} />
      </Routes>
    </>
  );
};
