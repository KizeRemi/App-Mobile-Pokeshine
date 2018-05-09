import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { ProfileFriendCodeView } from '../../components/Views';
import { TextFriendCode } from '../../components/Texts';

class ProfileFriendCode extends PureComponent {
  static propTypes = {
    friendCode: PropTypes.number.isRequired,
  };

  render () {
    return (      
      <ProfileFriendCodeView>
        <TextFriendCode>{this.props.friendCode}</TextFriendCode>
      </ProfileFriendCodeView>
    );
  }
}

export default ProfileFriendCode;