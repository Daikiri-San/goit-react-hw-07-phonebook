import { connect } from 'react-redux';
import contactsActions from '../redux/contacts/contactsActions';
import withThemeContext from './hoc/withTheme';
import Filter from './Filter';

// const mapDispatchToProps = dispatch => {
//   return {
//     onChangeFilter: str => dispatch(filterActions.changeFilter(str)),
//   };
// };

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};

export default connect(null, mapDispatchToProps)(withThemeContext(Filter));
