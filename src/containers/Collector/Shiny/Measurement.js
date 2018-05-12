import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { MeasurementContainer, MeasurementBloc } from '../../../components/Views';
import { TextShinyHeight, TextMeasurement } from '../../../components/Texts';
import { View } from 'react-native';

class Measurement extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
  };

  render() {
    const  { weight, height } = this.props;
    return (    
      <MeasurementContainer>
          <MeasurementBloc>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <TextShinyHeight>{weight}</TextShinyHeight>
              <TextMeasurement> Kg </TextMeasurement>
            </View>
            <TextMeasurement>Poids</TextMeasurement>
          </MeasurementBloc>
          <MeasurementBloc left>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <TextShinyHeight>{height}</TextShinyHeight>
              <TextMeasurement> m </TextMeasurement>
            </View>
            <TextMeasurement>Taille</TextMeasurement>
          </MeasurementBloc>
      </MeasurementContainer>
    )
  }
}

export default Measurement;