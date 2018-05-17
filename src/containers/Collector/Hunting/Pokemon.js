import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PokemonShinyContainer } from '../../../components/Views';
import { PokemonName, PokemonGen } from '../../../components/Texts';
import { loadPokemon } from '../../../actions/pokemon';
import { updateCurrentHunt } from '../../../actions/CurrentHunt';
import { View, Text, ActivityIndicator, Image, TouchableOpacity } from 'react-native';

import Poke from '../../../images/poke.png';

class Pokemon extends Component {
  static propTypes = {
    token: PropTypes.string.isRequired,
    pokemon: PropTypes.shape({}).isRequired,
    isLoading: PropTypes.bool.isRequired,
    number: PropTypes.number.isRequired,
  };

  componentDidMount() {
    const { number, loadPokemon, token } = this.props;
    loadPokemon(token, number);
  }

  addCurrentHunt = () => {
    const { number, updateCurrentHunt, token } = this.props;
    updateCurrentHunt(token, number);
  }

  render() {
    const { pokemon, isLoading, number, idCurrentHunt } = this.props;
    return (
      <View style={{ marginHorizontal: 30 }}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <Fragment>
            {pokemon && (
              <PokemonShinyContainer>
                <Image style={{ marginVertical: 15, width: 115, height: 140 }} source={Poke} />
                <View style={{ marginLeft: 20, flex: 1, flexDirection: 'column', alignItems: 'flex-end'}}>
                  <PokemonName>{pokemon.name.toUpperCase()}</PokemonName>
                  <PokemonGen>Génération {pokemon.generation}</PokemonGen>
                  {pokemon.id !== idCurrentHunt ? (
                    <TouchableOpacity onPress={this.addCurrentHunt}><Text>Chasser ce shiny</Text></TouchableOpacity>
                  ) : (
                    <Text>Vous chassez actuellement ce shiny.</Text>
                  )}
                </View>
              </PokemonShinyContainer>
            )}
          </Fragment>
        )}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  token: state.member.token,
  userId: state.member.id,
  isLoading: state.pokemon.isLoading,
  pokemon: state.pokemon.pokemon,
  idCurrentHunt: state.member.currentHunt.id
});
  
const mapDispatchToProps = (dispatch) => {
  return {
    loadPokemon: (token, pokemonId) => loadPokemon(token, pokemonId, dispatch),
    updateCurrentHunt: (token, pokemonId) => updateCurrentHunt(token, pokemonId, dispatch),
  }
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
