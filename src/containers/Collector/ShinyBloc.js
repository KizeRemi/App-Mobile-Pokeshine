import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { ShinyContent } from '../../components/Buttons';
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
    return (
      <ShinyContent onPress={this.loadShiny}>
        <Text>{shiny.pokemon.name}</Text>
      </ShinyContent>
    )
  }
}

export default ShinyBloc;