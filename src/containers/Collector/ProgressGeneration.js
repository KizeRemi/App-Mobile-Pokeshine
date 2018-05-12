import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { ProgressGenerationContainer } from '../../components/Views';
import { ProgressBar, ProgressBarTitle } from '../../components/Texts';
import * as Progress from 'react-native-progress';

class ProgressGeneration extends PureComponent {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }

  calculProgression = () => {
    const { counter, total } = this.props;
    return counter / total;
  }

  render() {
    const { counter, total } = this.props;
    return (
      <ProgressGenerationContainer>
        <ProgressBarTitle>Progression sur cette génération</ProgressBarTitle>
        <Progress.Bar style={{ marginTop: 10 }} progress={this.calculProgression()} width={null} height={18} />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <ProgressBar> {counter} / {total}</ProgressBar>
        </View>
      </ProgressGenerationContainer>
    )
  }
}

export default ProgressGeneration;