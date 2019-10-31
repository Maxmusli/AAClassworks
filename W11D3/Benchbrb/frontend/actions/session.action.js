import { signup, login, logout} from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


export const receiveSessionErrors = errors => (
  {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
)

const receiveCurrentUser = user => (
  {
    type: RECEIVE_CURRENT_USER,
    user
  }
)

const logoutCurrentUser = () => (
  {
    type: LOGOUT_CURRENT_USER,
  }
)

export const createNewUser = formUser => dispatch => signup(formUser)
    .then( user => dispatch(receiveCurrentUser(user)) )
    .fail( errors => dispatch(receiveSessionErrors(errors.respose.JSON)))


export const loginUser = formUser => dispatch => login(formUser)
    .then( user => dispatch(receiveCurrentUser(user)) )
    .fail( errors => dispatch(receiveSessionErrors(errors.respose.JSON)))

export const logoutUser = () => dispatch => logout()
    .then( () => dispatch(logoutCurrentUser()) );