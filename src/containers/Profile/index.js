import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TouchableOpacity, Text } from 'react-native';
import { Background } from '../../components/Views';
import { Actions } from 'react-native-router-flux';

class Settings extends Component {

  render() {
    return (
      <Background>
        <TouchableOpacity onPress={Actions.settings}>
          <Text>Réglages</Text>
        </TouchableOpacity>
      </Background>   
    )
  }
}

export default Settings;