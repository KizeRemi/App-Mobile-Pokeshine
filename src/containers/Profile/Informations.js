import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ProfileBlocContainer, ProfileIconView, ProfileBlocContent } from '../../components/Views';
import { TextCategoryTitle, TextDescription } from '../../components/Texts';
import { ProfileIcons } from '../../components/Icons';

class ProfileInformations extends PureComponent {
  static propTypes = {
    description: PropTypes.string.isRequired,
  }

  render () {
    return (      
      <ProfileBlocContainer>
        <ProfileIconView>
          <ProfileIcons></ProfileIcons>
        </ProfileIconView>
        <ProfileBlocContent>
          <TextCategoryTitle>Mes informations</TextCategoryTitle>
          <TextDescription>{this.props.description}</TextDescription>
        </ProfileBlocContent>
      </ProfileBlocContainer>
    );
  }
}

export default ProfileInformations;