import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

// default state
const _nullSession = {
  currentUser: null
}

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUser: action.user }); // slice of state that the current user nested under
    case LOGOUT_CURRENT_USER:
      return _nullSession
    default:
      return state;
  }
}