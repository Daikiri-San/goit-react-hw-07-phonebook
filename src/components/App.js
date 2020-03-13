import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThemeContext from '../contexts/ThemeContext';
import contactsOperations from '../redux/contacts/contactsOperations';
import contactsSelectors from '../redux/contacts/contactsSelectors';
import Filter from './Filter';
import Layout from './Layout';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Header from './Header';
import Spinner from './Spinner';
import '../base.css';

class App extends Component {
  componentDidMount() {
    const { onFetchExistContacts } = this.props;
    return onFetchExistContacts();
  }

  render() {
    const { contacts, isLoadingContacts } = this.props;

    return (
      <ThemeContext>
        <Layout>
          {isLoadingContacts && <Spinner />}
          <Header text={'Phonebook'} />
          <ContactForm />
          {contacts.length >= 2 && <Filter />}
          <ContactList />
        </Layout>
      </ThemeContext>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getContacts(state),
    isLoadingContacts: contactsSelectors.getLoading(state),
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addLocalContacts: array =>
//       dispatch(ContactsActions.addLocalContacts(array)),
//   };
// };

const mapDispatchToProps = {
  onFetchExistContacts: contactsOperations.fetchExistContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
