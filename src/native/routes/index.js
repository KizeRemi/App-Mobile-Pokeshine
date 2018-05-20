import React, { Component } from 'react';
import { Scene, Tabs, Router, Stack } from 'react-native-router-flux';

import { TabBarIcon } from '../../components/Icons';
import { compose } from 'redux';
import { connect } from 'react-redux';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import withAuthentication from './../withAuthentication';
import HomeComponent from '../../containers/Home';
import CollectorComponent from '../../containers/Collector';
import HuntingComponent from '../../containers/Collector/Hunting';
import ShinyComponent from '../../containers/Collector/Shiny';
import ProfileComponent from '../../containers/Profile';
import SettingsComponent from '../../containers/Profile/Settings';

import Pokeball from '../../images/pokeball-icon.png';
import PokeballWhite from '../../images/pokeball-icon-white.png';
import { Image } from 'react-native';

class RouterWrapper extends Component {

  renderRightButton = () => {
    return(
       <Image source={Pokeball} style={{ marginRight: 10 }}/>
    );
  };

  render() {
    return (
      <Router>
        <Stack key="root">
          <Tabs
            key="tabbar"
            swipeEnabled
            type="replace"
            hideNavBar
            showLabel={false}
            {...DefaultProps.tabProps}
          >
            <Stack
              key="profile"
              icon={() => <TabBarIcon></TabBarIcon>}
              {...DefaultProps.navbarProps}
            >
              <Scene hideNavBar key="profile" {...DefaultProps.navbarProps} component={ProfileComponent} />
              <Scene
                back
                key="settings"
                title="Mettre à jour mon profil"
                {...DefaultProps.navbarProps}
                component={SettingsComponent}
              />
            </Stack>
            <Stack
              key="home"
              icon={() => <TabBarIcon></TabBarIcon>}
              {...DefaultProps.navbarProps}
            >
              <Scene
                key="home"
                component={HomeComponent}
                title={`Welcome to pokeshine`.toUpperCase()}
                {...DefaultProps.navbarCollectorProps}
              />
            </Stack>
            <Stack
              key="collector"
              icon={() => <Image source={PokeballWhite} />}
              {...DefaultProps.navbarProps}
            >
              <Scene
                key="collector"
                title={`shinydex`.toUpperCase()}
                renderRightButton={this.renderRightButton()}
                component={CollectorComponent}
                {...DefaultProps.navbarCollectorProps}
              />
              <Scene back key="hunting" {...DefaultProps.navbarProps} component={HuntingComponent} />
              <Scene back key="shiny" {...DefaultProps.navbarCollectorProps} component={ShinyComponent} />
            </Stack>
          </Tabs>
        </Stack>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticate: state.member.token,
});

export default compose(
  connect(mapStateToProps),
  withAuthentication
)(RouterWrapper);
