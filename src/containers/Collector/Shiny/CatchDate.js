import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { CatchDateContainer } from '../../../components/Views';
import { CatchDateText } from '../../../components/Texts';

class ShinyCatchDate extends Component {
  static propTypes = {
    catchDate: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  };

  static defaultProps = {
    color: '#4A4A4A',
  }

  render() {
    const catchDate = new Date(this.props.catchDate);
    return (    
      <CatchDateContainer>
        <CatchDateText color={this.props.color}>{catchDate.toDateString()}</CatchDateText>
      </CatchDateContainer>
    )
  }
}

export default ShinyCatchDate;