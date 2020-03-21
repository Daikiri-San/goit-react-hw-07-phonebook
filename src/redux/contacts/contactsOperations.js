import axios from 'axios';
import contactsActions from './contactsActions';

const AUTH_TOKEN = 'f8e86dbe-f442-4cf4-9aab-e905dfbf0cb3';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/v1';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const fetchExistContacts = () => dispatch => {
  dispatch(contactsActions.fetchExistContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) =>
      dispatch(contactsActions.fetchExistContactsSuccess(data)),
    )
    .catch(error => dispatch(contactsActions.fetchExistContactsError(error)));
};

const addContact = ({ name, number }) => dispatch => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post('/contacts', { name, number })
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

const removeContact = id => dispatch => {
  dispatch(contactsActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch(error =>
      dispatch(contactsActions.removeContactError(error.message)),
    );
};

export default {
  addContact,
  fetchExistContacts,
  removeContact,
};
