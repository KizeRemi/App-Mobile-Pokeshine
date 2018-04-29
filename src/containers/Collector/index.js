import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Background } from '../../components/Views';

import { getPokemonCollection } from '../../actions/pokemon';

class Collector extends Component {
  static propTypes = {
    member: PropTypes.shape({}).isRequired,
    pokemonCollection: PropTypes.array.isRequired,
    getPokemonCollection: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { member, getPokemonCollection } = this.props;
    getPokemonCollection(member.token, 40);
  }
  render() {
    console.log(this.props.pokemonCollection);
    return (
      <Background>
      </Background>   
    )
  }
}

const mapStateToProps = state => ({
  member: state.member,
  pokemonCollection: state.pokemon.list,
  isLoading: state.pokemon.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemonCollection: (token, offset) => getPokemonCollection(token, offset, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Collector);