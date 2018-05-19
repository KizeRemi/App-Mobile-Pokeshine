import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BackgroundWhite, ButtonCenter, ProfileUserInformations } from '../../components/Views';
import { UpdateProfileButton } from '../../components/Buttons'; 
import { UpdateProfileText, TextRegion, TextYear } from '../../components/Texts';
import { ArrowIcon, MarkerIcon } from '../../components/Icons';
import { Actions } from 'react-native-router-flux';
import { View, Text } from 'react-native';

import Header from './Header';
import Numbers from './Numbers';
import Rewards from './Rewards';
import Informations from './Informations';
import FriendCode from './FriendCode';
import ProgressGenerations from './ProgressGenerations';

class Profile extends Component {
  static propTypes = {
    member: PropTypes.shape({}).isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  render() {
    const { member } = this.props;
    return (
      <BackgroundWhite>
        <Header member={member} />
        <ButtonCenter>
          <UpdateProfileButton onPress={Actions.settings}>
            <UpdateProfileText>{'Modifier mon profil'.toUpperCase()}</UpdateProfileText>
            <ArrowIcon></ArrowIcon>
          </UpdateProfileButton>
        </ButtonCenter>
        <ProfileUserInformations>
          <View style={{ flexDirection: 'row'}}>
            {member.region ? (
              <TextRegion>{member.region.toUpperCase()}</TextRegion>
            ) : (
              <TextRegion>{'Région inconnu'.toUpperCase()}</TextRegion>
            )}
            <MarkerIcon></MarkerIcon>
          </View>
          <TextYear>{member.age} ans</TextYear>
        </ProfileUserInformations>
        <Informations description={member.description}/>
        <FriendCode friendCode={member.friendCode} />
        <ProgressGenerations />
        <Rewards />
      </BackgroundWhite>   
    )
  }
}

const mapStateToProps = state => ({
  member: state.member,
  isLoading: state.member.isLoading,
});

export default connect(mapStateToProps)(Profile);