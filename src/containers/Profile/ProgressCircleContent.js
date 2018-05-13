import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ProgressTitle, ProgressGenTitle } from '../../components/Texts';
import * as Progress from 'react-native-progress';

class ProgressGenerations extends PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { color, progress, title } = this.props;
    return ( 
      <View style={{ alignItems: 'center' }} >
        <ProgressGenTitle color={color}>{title}</ProgressGenTitle>
        <Progress.Circle size={70} thickness={8} progress={progress} style={{ marginBottom: 10, marginHorizontal: 2 }} color={color} />
      </View>
    );
  }
}

export default ProgressGenerations;
