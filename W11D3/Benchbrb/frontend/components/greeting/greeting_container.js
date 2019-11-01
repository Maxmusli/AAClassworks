import  { connect } from 'react-redux';
import Greeting from './greeting';

import { logout } from '../../actions/session_action';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id] // maybe user?
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);