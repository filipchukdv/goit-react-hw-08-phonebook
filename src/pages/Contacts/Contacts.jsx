import { Container, Typography } from '@mui/material';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Header from 'components/Header/Header';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from 'redux/contacts/thunks';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  return (
    <>
      <Container maxWidth={'md'}>
        <Header />
        <ContactForm />
        <Typography
          component="h1"
          variant="h4"
          sx={{ mt: 5, textAlign: 'center' }}
        >
          Contacts
        </Typography>
        <Filter />
        {/* <div>If is loading, show Loader</div> */}
        <ContactList />
      </Container>
    </>
  );
};

export default Contacts;
