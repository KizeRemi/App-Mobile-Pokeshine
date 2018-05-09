import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { ProfileBlocContainer, ProfileIconView, ProfileBlocContent, RewardsContent } from '../../components/Views';
import { TextCategoryTitle, TextDescription } from '../../components/Texts';
import { ProfileIcons } from '../../components/Icons';
import { ImageReward } from '../../components/Images';
import Badge from '../../images/badge.png';

class ProfileRewards extends PureComponent {

  render () {
		const { nbrShinies } = this.props;
    return (      
      <ProfileBlocContainer>
        <ProfileIconView>
          <ProfileIcons></ProfileIcons>
        </ProfileIconView>
        <ProfileBlocContent>
          <TextCategoryTitle>Dernières récompenses</TextCategoryTitle>
          <RewardsContent>
            <ImageReward source={Badge} />
            <ImageReward source={Badge} />
            <ImageReward source={Badge} />
            <ImageReward source={Badge} />
          </RewardsContent>
        </ProfileBlocContent>
      </ProfileBlocContainer>
    );
  }
}

export default ProfileRewards;