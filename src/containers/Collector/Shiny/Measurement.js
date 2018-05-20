import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { MeasurementContainer, MeasurementBloc } from '../../../components/Views';
import { TextShinyHeight, TextMeasurement } from '../../../components/Texts';
import { View } from 'react-native';

class Measurement extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  };

  static defaultProps = {
    color: '#4A4A4A',
  }

  render() {
    const  { weight, height, color } = this.props;
    return (
      <MeasurementContainer>
        <MeasurementBloc>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TextShinyHeight color={color}>{weight}</TextShinyHeight>
            <TextMeasurement color={color}> Kg </TextMeasurement>
          </View>
          <TextMeasurement color={color}>Poids</TextMeasurement>
        </MeasurementBloc>
        <MeasurementBloc>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TextShinyHeight color={color}>{height}</TextShinyHeight>
            <TextMeasurement color={color}> m </TextMeasurement>
          </View>
          <TextMeasurement color={color}>Taille</TextMeasurement>
        </MeasurementBloc>
      </MeasurementContainer>
    )
  }
}

export default Measurement;