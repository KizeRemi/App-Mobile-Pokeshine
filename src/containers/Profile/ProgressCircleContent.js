import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ProgressTitle, ProgressGenTitle } from '../../components/Texts';
import * as Progress from 'react-native-progress';

import { PKMN_BY_GEN } from '../Collector/constants';

class ProgressGenerations extends PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    gen: PropTypes.number.isRequired,
  };

  calculProgression = () => {
    const { progress, gen } = this.props;
    const currentGen = PKMN_BY_GEN[gen - 1];
    return progress / (currentGen.end - currentGen.start);
  }

  formatText = () => {
    const { progress, gen } = this.props;
    const currentGen = PKMN_BY_GEN[gen - 1];
    return `${progress} / ${currentGen.end - currentGen.start}`
  }

  render() {
    const { color, progress, gen } = this.props;
    const currentGen = PKMN_BY_GEN[gen - 1];
    return ( 
      <View style={{ alignItems: 'center' }} >
        <ProgressGenTitle color={color}>{currentGen.name}</ProgressGenTitle>
        <Progress.Circle
          size={70}
          thickness={8}
          progress={this.calculProgression()}
          style={{ marginBottom: 10, marginHorizontal: 5 }}
          color={color}
          showsText
          formatText={this.formatText}
          textStyle={{ fontFamily: 'openSansBoldItalic', fontSize: 13 }}
        />
      </View>
    );
  }
}

export default ProgressGenerations;
