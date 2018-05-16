import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ImageUserLowRank } from '../../../components/Images';
import { View,Text } from 'react-native';

class UserRank extends PureComponent {
  static propTypes = {
    position: PropTypes.number.isRequired,
    user: PropTypes.shape({}).isRequired,
  };

  render() {
    const { user, position } = this.props;
    return (
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <ImageUserLowRank source={{uri: 'http://www.pokeshine.remi-mavillaz.fr/uploads/avatars/' + user.avatar }} />
        <Text>{user.username}</Text>
        <Text>{position}</Text>
      </View>
    )
  }
}

export default UserRank;
