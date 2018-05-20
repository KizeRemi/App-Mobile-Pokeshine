import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BackgroundWhite, HeaderHome } from '../../components/Views';
import UsersTop from './UsersTop';
import CurrentHunt from './CurrentHunt';

class Home extends Component {

  render() {
    return (
      <BackgroundWhite>
        <CurrentHunt />
        <UsersTop />
      </BackgroundWhite>
    )
  }
}

export default Home;
