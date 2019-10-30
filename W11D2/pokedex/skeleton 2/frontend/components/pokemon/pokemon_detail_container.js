import { connect } from 'react-redux';
import { selectPoke } from '../../reducers/selectors';
import { requestPoke } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    pokemon: state.entities.pokemon[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => {

  return {
     requestPoke: (id) => dispatch(requestPoke(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);