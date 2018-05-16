import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BackgroundWhite, HeaderHome } from '../../components/Views';
import { TitleHome } from '../../components/Texts';
import UsersTop from './UsersTop';

class Home extends Component {

  render() {
    return (
      <BackgroundWhite>
        <HeaderHome>
          <TitleHome>{'Welcome to pokeshine'.toUpperCase()}</TitleHome>
          <UsersTop />
        </HeaderHome>
      </BackgroundWhite>
    )
  }
}

export default Home;
