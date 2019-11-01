import { connect } from 'react-redux';
import SessionForm from '../components/session_form';

import { login } from '../actions/session_action';

const mapStateToProps = (state, ownProps) => ({
  formType: 'login',
  errors: state.errors.session
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);