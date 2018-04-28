import React, { Component } from 'react';
import { Scene, Tabs, Router, Stack } from 'react-native-router-flux';

import { Icon } from 'native-base';
import { compose } from 'redux';
import { connect } from 'react-redux';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import withAuthentication from './../withAuthentication';
import HomeComponent from '../../containers/Home';

class RouterWrapper extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene hideNavBar>
            <Tabs
              key="tabbar"
              swipeEnabled
              type="replace"
              showLabel={false}
              {...DefaultProps.tabProps}
            >
              <Stack
                key="home"
                title={AppConfig.appName.toUpperCase()}
                icon={() => <Icon name="planet" {...DefaultProps.icons} />}
                {...DefaultProps.navbarProps}
              >
                <Scene key="home" component={HomeComponent} />
              </Stack>
            </Tabs>
          </Scene>
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
