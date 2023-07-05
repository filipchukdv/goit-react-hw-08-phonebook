import { Container, TextField } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { filterValue } from 'redux/contacts/slice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleChange = e => {
    const value = e.target.value;
    dispatch(filterValue(value));
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 3 }}>
      <TextField
        margin="normal"
        fullWidth
        id="filter"
        label="Filter contacts"
        name="filter"
        onInput={handleChange}
        value={filter}
      />
    </Container>
  );
};

export default Filter;
