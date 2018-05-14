import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BackgroundWhite, DescriptionBloc } from '../../../components/Views';
import { TextShinyPageTitle, TextTitleDescription, ShinyDescription } from '../../../components/Texts';
import { loadShiny } from '../../../actions/pokemon';
import { Text, View, Image } from 'react-native';

class Shiny extends Component {
  render() {
    return (
      <BackgroundWhite>

      </BackgroundWhite>
    )
  }
}

const mapStateToProps = state => ({
  id: state.member.id,
});

export default connect(mapStateToProps)(Home);