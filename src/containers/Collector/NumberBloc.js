import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { ShinyContent } from '../../components/Buttons';
import { TextNumberCollector } from '../../components/Texts';
import { Actions } from 'react-native-router-flux';

class NumberBloc extends PureComponent {
  static propTypes = {
    number: PropTypes.number.isRequired,
  }

  newShiny = () => {
    Actions.hunting({ number: this.props.number });
  }

  render() {
    return (
      <ShinyContent onPress={this.newShiny}>
        <TextNumberCollector>{this.props.number}</TextNumberCollector>
      </ShinyContent>
    )
  }
}

export default NumberBloc;