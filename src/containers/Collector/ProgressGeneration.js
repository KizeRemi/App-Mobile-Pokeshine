import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ProgressGenerationContainer, CenteredBloc } from '../../components/Views';
import { ProgressBar, ProgressBarTitle } from '../../components/Texts';
import * as Progress from 'react-native-progress';

import { POKESHINE_COLORS_GEN }from './ScrollGen/constants';

class ProgressGeneration extends PureComponent {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    generation: PropTypes.number.isRequired,
  }

  calculProgression = () => {
    const { counter, total } = this.props;
    return counter / total;
  }

  render() {
    const { counter, total, generation } = this.props;
    return (
      <ProgressGenerationContainer>
        <ProgressBarTitle>Progression sur cette génération</ProgressBarTitle>
        <Progress.Bar
          borderWidth={2}
          color={POKESHINE_COLORS_GEN[generation]}
          progress={this.calculProgression()}
          width={null}
          height={18}
        />
        <CenteredBloc>
          <ProgressBar color={POKESHINE_COLORS_GEN[generation]}>{counter} / {total}</ProgressBar>
        </CenteredBloc>
      </ProgressGenerationContainer>
    )
  }
}

export default ProgressGeneration;