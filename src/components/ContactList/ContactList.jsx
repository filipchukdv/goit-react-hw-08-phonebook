import {
  Collapse,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteContactThunk, getContactsThunk } from 'redux/contacts/thunks';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  return (
    <Container maxWidth={'xs'}>
      <List>
        <TransitionGroup>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <Collapse key={id}>
                <ListItem
                  divider={true}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      title="Delete"
                      onClick={() => {
                        dispatch(deleteContactThunk(id))
                          .unwrap()
                          .then(() => dispatch(getContactsThunk()));
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary={`${name} : ${number}`} />
                </ListItem>
              </Collapse>
            );
          })}
        </TransitionGroup>
      </List>
    </Container>
  );
};

export default ContactList;
