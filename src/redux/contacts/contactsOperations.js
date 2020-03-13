import axios from 'axios';
import contactsActions from './contactsActions';

axios.defaults.baseURL = 'http://localhost:2000';

const fetchExistContacts = () => dispatch => {
  dispatch(contactsActions.fetchExistContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => {
      dispatch(contactsActions.fetchExistContactsSuccess(data));
    })
    .catch(error => dispatch(contactsActions.fetchExistContactsError(error)));
};

const addContact = ({ name, number }) => dispatch => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post('/contacts', { name, number })
    .then(({ data }) => {
      dispatch(contactsActions.addContactSuccess(data));
    })
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

const removeContact = id => dispatch => {
  dispatch(contactsActions.removeContactRequest());

  axios
    .delete(`/contacts/${7}`)
    .then(() => {
      dispatch(contactsActions.removeContactSuccess(id));
    })
    .catch(error => {
      dispatch(contactsActions.removeContactError(error.messege));
    });
};

export default {
  addContact,
  fetchExistContacts,
  removeContact,
};
