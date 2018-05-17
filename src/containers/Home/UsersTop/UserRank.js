import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ImageUserLowRank } from '../../../components/Images';
import { UserRankContainer, UsernameRankContainer, NumberRankContainer } from '../../../components/Views';
import { UsernameLowRank, NumberLowRank } from '../../../components/Texts';
import { View,Text } from 'react-native';

class UserRank extends PureComponent {
  static propTypes = {
    position: PropTypes.number.isRequired,
    user: PropTypes.shape({}).isRequired,
  };

  render() {
    const { user, position } = this.props;
    return (
      <UserRankContainer>
        <ImageUserLowRank source={{ uri: 'http://www.pokeshine.remi-mavillaz.fr/uploads/avatars/' + user.avatar }} />
        <UsernameRankContainer>
          <UsernameLowRank>{user.username}</UsernameLowRank>
        </UsernameRankContainer>
        <NumberRankContainer>
          <NumberLowRank>{position}</NumberLowRank>
        </NumberRankContainer>
      </UserRankContainer>
    )
  }
}

export default UserRank;
