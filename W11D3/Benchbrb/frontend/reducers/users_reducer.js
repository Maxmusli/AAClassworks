import {RECEIVE_CURRENT_USER} from '../actions/session.action';


export default (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return (Object.assign({}, 
        state, {
          [action.user.id]: action.user
        }
      ))
      
      break;
  
    default:
      break;
  }
}