import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { ProfileBlocContainer, ProfileIconView, ProfileBlocContent } from '../../components/Views';
import { TextCategoryTitle, TextDescription } from '../../components/Texts';
import { ProfileIcons } from '../../components/Icons';

class ProfileInformations extends PureComponent {

  render () {
    return (      
      <ProfileBlocContainer>
        <ProfileIconView>
          <ProfileIcons></ProfileIcons>
        </ProfileIconView>
        <ProfileBlocContent>
          <TextCategoryTitle>Mes informations</TextCategoryTitle>
          <TextDescription>
            Hello, Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
            Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
          </TextDescription>
        </ProfileBlocContent>
      </ProfileBlocContainer>
    );
  }
}

export default ProfileInformations;