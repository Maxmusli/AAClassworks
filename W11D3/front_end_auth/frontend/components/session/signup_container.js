import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

// doesn't need mapState because signup user doesn't rely on any part of state
const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
})

export default connect(null, mapDispatchToProps)(Signup);