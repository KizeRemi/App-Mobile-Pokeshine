import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { SubmitButton } from './Buttons';
import { TextSubmit } from './Texts';

class Button extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
  };

  static defaultProps = { isLoading: false };

  render() {
    const { label, onPress, isLoading } = this.props;
    return (      
      <SubmitButton onPress={onPress}>
        {!isLoading ? (
          <TextSubmit>{label.toUpperCase()}</TextSubmit>
        ) : (
          <ActivityIndicator size="large" color="#fff" />
        )}
      </SubmitButton>
    );
  }
}

export default Button;