import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { ShinyContent } from '../../components/Views';

class ShinyBloc extends PureComponent {
  static propTypes = {
    shiny: PropTypes.isRequired,
  }

  render() {
    const { shiny } = this.props;
    return (
      <ShinyContent>
        {typeof shiny === 'object' ?
          <Text>{shiny.pokemon.name}</Text>
          :
          <Text>{shiny}</Text>
        }
      </ShinyContent>
    )
  }
}

export default ShinyBloc;