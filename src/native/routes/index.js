import React, { Component } from 'react';
import { Scene, Tabs, Router, Stack } from 'react-native-router-flux';

import { Icon } from 'native-base';
import { compose } from 'redux';
import { connect } from 'react-redux';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import withAuthentication from './../withAuthentication';
import HomeComponent from '../../containers/Home';
import CollectorComponent from '../../containers/Collector';
import ProfileComponent from '../../containers/Profile';
import SettingsComponent from '../../containers/Profile/Settings';

class RouterWrapper extends Component {
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
              icon={() => <Icon name="planet" {...DefaultProps.icons} />}
              {...DefaultProps.navbarProps}
            >
              <Scene hideNavBar key="profile" {...DefaultProps.navbarProps} component={ProfileComponent} />
              <Scene back key="settings" {...DefaultProps.navbarProps} component={SettingsComponent} />
            </Stack>
            <Stack
              key="home"
              icon={() => <Icon name="planet" {...DefaultProps.icons} />}
              {...DefaultProps.navbarProps}
            >
              <Scene hideNavBar key="home" component={HomeComponent} />
            </Stack>
            <Stack
              key="collector"
              title={'Collector'.toUpperCase()}
              icon={() => <Icon name="planet" {...DefaultProps.icons} />}
              {...DefaultProps.navbarProps}
            >
              <Scene hideNavBar key="collector" component={CollectorComponent} />
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
