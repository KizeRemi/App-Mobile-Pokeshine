import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ShinyContent } from '../../components/Buttons';
import { TextShinyTitle, TextShinyNotValide } from '../../components/Texts';
import { ImageShinyList } from '../../components/Images';
import { Actions } from 'react-native-router-flux';

class ShinyBloc extends PureComponent {
  static propTypes = {
    shiny: PropTypes.shape({}).isRequired,
  }

  loadShiny = () => {
    Actions.shiny({ number: this.props.shiny.pokemon.number });
  }

  render() {
    const { shiny } = this.props;
    const { pokemon } = shiny;
    return (
      <ShinyContent onPress={this.loadShiny}>
        <ImageShinyList
          imageStyle={{ borderRadius: 5 }}
          source={{uri: 'http://www.pokeshine.remi-mavillaz.fr/uploads/shinies/' + shiny.image }}
        >
          <TextShinyTitle color={shiny.image ? '#FFF' : '#A09F9F'}>#{pokemon.number} {pokemon.name}</TextShinyTitle>
          {!shiny.validation && <TextShinyNotValide>En cours de validation</TextShinyNotValide>}
        </ImageShinyList>
      </ShinyContent>
    )
  }
}

export default ShinyBloc;