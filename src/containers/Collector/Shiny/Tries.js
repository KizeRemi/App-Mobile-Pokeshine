import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { ShinyTriesContainer, ShinyTriesContent } from '../../../components/Views';
import { ShinyTriesText } from '../../../components/Texts';

class ShinyTries extends Component {
  static propTypes = {
    tries: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  };

  static defaultProps = {
    color: '#4A4A4A',
  }

  render() {
    const { tries, color } = this.props;
    return (
      <ShinyTriesContainer>
        <ShinyTriesContent>
          <ShinyTriesText color={color}>{tries}</ShinyTriesText>
        </ShinyTriesContent>
      </ShinyTriesContainer>
    )
  }
}

export default ShinyTries;