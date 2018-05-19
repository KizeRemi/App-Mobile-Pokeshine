import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextFriendCode } from '../../components/Texts';
import { LinearGradient } from 'expo';

class ProfileFriendCode extends PureComponent {
  static propTypes = {
    friendCode: PropTypes.string,
  };

  format = (friendCode) => {
    return friendCode.toString().match(/.{4}/g).join(' - ');
  }

  render () {
    const { friendCode } = this.props;
    return (      
      <LinearGradient
        style={{ marginHorizontal: 40, flex: 1, alignItems: 'center', borderRadius: 5, paddingVertical: 10 }}
        colors={['#82daf2', '#2ec4fe', '#26c1fb']}
      >
        {friendCode ? (
          <TextFriendCode>{this.format(friendCode)}</TextFriendCode>
        ) : (
          <TextFriendCode>Code non fourni.</TextFriendCode>
        )}
      </LinearGradient>
    );
  }
}

export default ProfileFriendCode;
