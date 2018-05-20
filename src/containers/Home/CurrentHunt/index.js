import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadCurrentHunt } from '../../../actions/users';
import { Text, View, Image } from 'react-native';
import { HuntPanel } from '../../../components/Views';
import { PokemonName, PokemonGen, PokemonRoad, TitlePanelHunt } from '../../../components/Texts';

import Poke from '../../../images/poke.png';
import TriesPanel from './TriesPanel';

class CurrentHunt extends Component {
  static propTypes = {
    token: PropTypes.string.isRequired,
    currentHunt: PropTypes.shape({}).isRequired,
  };

  render() {
    const { currentHunt } = this.props;
    return (
      <Fragment>
        {currentHunt && (
          <Fragment>
            <TitlePanelHunt>Mon tableau de Chasse</TitlePanelHunt>
            <View style={{ marginHorizontal: 20, borderRadius: 5, borderWidth: 1, borderColor: '#30c7fe' }} >
              <HuntPanel>
                <Image style={{ marginLeft: 20, marginVertical: 5, width: 75, height: 90 }} source={Poke} />
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end'}}>
                  <PokemonName>{currentHunt.name.toUpperCase()}</PokemonName>
                  <PokemonGen>Génération {currentHunt.generation}</PokemonGen>
                  <PokemonRoad>Route 105</PokemonRoad>
                </View>
              </HuntPanel>
            </View>
            <TriesPanel />
          </Fragment>
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  token: state.member.token,
  currentHunt: state.member.currentHunt,
});

export default connect(mapStateToProps)(CurrentHunt);
