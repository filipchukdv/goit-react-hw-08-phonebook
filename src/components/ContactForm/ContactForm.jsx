import { Box, Button, Container, TextField } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { createContactThunk, getContactsThunk } from 'redux/contacts/thunks';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const form = e.target;
    const formName = form.elements.name.value;
    const formNumber = form.elements.number.value;
    e.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === formName.toLowerCase()
      )
    ) {
      alert(`${formName} is already in contacts`);
      return;
    }
    dispatch(createContactThunk({ name: formName, number: formNumber }))
      .unwrap()
      .then(() => dispatch(getContactsThunk()));
    form.reset();
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 3 }}>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="number"
          label="Number"
          id="number"
          autoComplete="current-password"
          inputProps={{
            pattern: '[0-9]*',
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add contact
        </Button>
      </Box>
    </Container>
  );
};

export default ContactForm;
