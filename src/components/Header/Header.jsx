import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail } from 'redux/auth/selectors';
import { logoutThunk } from 'redux/auth/thunk';

const Header = () => {
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Phonebook
          </Typography>
          <Typography component="div" mr={5}>
            {email}
          </Typography>
          <Button color="inherit" onClick={() => dispatch(logoutThunk())}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
