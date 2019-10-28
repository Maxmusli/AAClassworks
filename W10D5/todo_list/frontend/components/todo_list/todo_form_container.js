import { connect } from 'react-redux';
import TodoForm from './todo_form';
import { receiveTodo } from '../../actions/todo_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo))
  };
}

export default connect(null, mapDispatchToProps)(TodoForm);