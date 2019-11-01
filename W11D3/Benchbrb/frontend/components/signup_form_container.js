import { connect } from 'react-redux';
import SessionForm from '../components/session_form';

import { createNewUser } from '../actions/session_action';

const mapStateToProps = (state, ownProps) => ({
  formType: 'signup',
  errors: state.errors.session
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(createNewUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);