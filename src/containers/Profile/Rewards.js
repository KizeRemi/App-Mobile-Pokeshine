import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { ProfileProgressContainer, ProfileProgressContent, RewardsContent } from '../../components/Views';
import { ProgressTitle, TextInProgress } from '../../components/Texts';

class ProfileRewards extends PureComponent {

  render () {
		const { nbrShinies } = this.props;
    return (      
      <ProfileProgressContainer>
        <ProgressTitle>Dernières récompenses</ProgressTitle>
        <ProfileProgressContent>
          <TextInProgress>Work in progress...</TextInProgress>
        </ProfileProgressContent>
      </ProfileProgressContainer>
    );
  }
}

export default ProfileRewards;