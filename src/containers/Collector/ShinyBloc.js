import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { ShinyContent } from '../../components/Buttons';
import { TextShinyTitle, TextShinyNotValide } from '../../components/Texts';
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
        <TextShinyTitle>#{pokemon.number} {pokemon.name}</TextShinyTitle>
        <View style={{ height: 45 }}></View>
        {!shiny.validate && <TextShinyNotValide>En cours de validation</TextShinyNotValide>}
      </ShinyContent>
    )
  }
}

export default ShinyBloc;