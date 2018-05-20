import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ProfileDescriptionContainer, ProfileIconView, ProfileBlocContent } from '../../components/Views';
import { TextCategoryTitle, TextDescription } from '../../components/Texts';
import { ProfileIcons } from '../../components/Icons';

class ProfileInformations extends PureComponent {
  static propTypes = {
    description: PropTypes.string.isRequired,
  }

  render () {
    const { description } = this.props;
    return (      
      <ProfileDescriptionContainer>
        <ProfileBlocContent>
          {description ? (
            <TextDescription>{this.props.description.toUpperCase()}</TextDescription>
          ) : (
            <TextDescription>Aucune description pour l'instant.</TextDescription>
          )}
        </ProfileBlocContent>
      </ProfileDescriptionContainer>
    );
  }
}

export default ProfileInformations;