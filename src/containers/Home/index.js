import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BackgroundWhite, HeaderHome } from '../../components/Views';
import { TitleHome } from '../../components/Texts';
import { View } from 'react-native';
import UsersTop from './UsersTop';
import CurrentHunt from './CurrentHunt';

class Home extends Component {

  render() {
    return (
      <BackgroundWhite>
        <View style={{ alignItems: 'center'}}>
        <TitleHome>{'Welcome to pokeshine'.toUpperCase()}</TitleHome>
        </View>
        <CurrentHunt />
        <UsersTop />
      </BackgroundWhite>
    )
  }
}

export default Home;
