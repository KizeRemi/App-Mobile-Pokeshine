import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TouchableOpacity, Text } from 'react-native';
import { Background } from '../../components/Views';
import Header from './Header';
import Numbers from './Numbers';
import Rewards from './Rewards';
import Informations from './Informations';
import FriendCode from './FriendCode';

class Profile extends Component {

  render() {
    const { member } = this.props;
    return (
      <Background>
        <Header member={member} />
        <Rewards />
        <Informations member={member}/>
        <FriendCode friendCode={member.friendCode} />
      </Background>   
    )
  }
}
const mapStateToProps = state => ({
  member: state.member,
  isLoading: state.member.isLoading,
});

export default connect(mapStateToProps)(Profile);