import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ProfileFriendCodeView } from '../../components/Views';
import { TextFriendCode } from '../../components/Texts';

class ProfileFriendCode extends PureComponent {
  static propTypes = {
    friendCode: PropTypes.string,
  };

  render () {
    const { friendCode } = this.props;
    return (      
      <ProfileFriendCodeView>
        {friendCode ? (
          <TextFriendCode>{friendCode}</TextFriendCode>
        ) : (
          <TextFriendCode>Code non fourni.</TextFriendCode>
        )}
      </ProfileFriendCodeView>
    );
  }
}

export default ProfileFriendCode;