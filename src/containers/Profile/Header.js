import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo';
import { TextUsername, TextRank } from '../../components/Texts';
import { BackgroundPokeball } from '../../components/Images';

import { Camera, Permissions, ImagePicker } from 'expo';
import Avatar from './Avatar';
import Pokeball from '../../images/pokeball.png';

class ProfileHeader extends PureComponent {
  static propTypes = {
    member: PropTypes.shape({}).isRequired,
  }

  render () {
    const { member } = this.props;
    return (      
      <LinearGradient
        colors={['#82daf2', '#2ec4fe', '#26c1fb']}
        style={{ width: '100%', paddingVertical: 50, alignItems: 'center', height: 280 }}
      >
        <BackgroundPokeball source={Pokeball} />
        <Avatar member={member} />
        <TextUsername>{member.username.toUpperCase()}</TextUsername>
        <TextRank>Shiny hunter confirmé</TextRank>
      </LinearGradient>
    );
  }
}

export default ProfileHeader;