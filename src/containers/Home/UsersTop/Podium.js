import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { PodiumView, CenteredBloc } from '../../../components/Views';
import { TitleHome, NumberRank, UsernameRank } from '../../../components/Texts';
import { TrophyIcon } from '../../../components/Icons';
import { ImageUserRank } from '../../../components/Images';
import { View } from 'react-native';

import { RANKING } from './constants';

class Podium extends PureComponent {
  static propTypes = {
    position: PropTypes.number.isRequired,
    user: PropTypes.shape({}).isRequired,
  };

  render() {
    const { user, position } = this.props;
    const rank = RANKING[position];
    return (
      <View style={{ width: '33.33%' }}>
        <CenteredBloc>
          <TrophyIcon color={rank.color}></TrophyIcon>
          <ImageUserRank source={{uri: 'http://www.pokeshine.remi-mavillaz.fr/uploads/avatars/' + user.avatar }} />
          <UsernameRank>{user.username}</UsernameRank>
        </CenteredBloc>
        <PodiumView height={rank.height}>
          <CenteredBloc>
            <NumberRank>{rank.number}</NumberRank>
          </CenteredBloc> 
        </PodiumView>
      </View>
    )
  }
}

export default Podium;
