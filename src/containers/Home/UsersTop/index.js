import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUsersTop } from '../../../actions/users';
import { TopUsersContainer, PodiumContainer, PodiumView, CenteredBloc } from '../../../components/Views';
import { TitleHome } from '../../../components/Texts';
import { Text, View } from 'react-native';

import Podium from './Podium';
import UserRank from './UserRank';

class Home extends Component {
  static propTypes = {
    token: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    loadUsersTop: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadUsersTop(this.props.token);
  }

  render() {
    const { users } = this.props;
    const usersLeft = users.slice(3,10);
    return (
      <TopUsersContainer>
        <PodiumContainer>
          {users[2] && <Podium position={2} user={users[2]} />}
          {users[0] && <Podium position={0} user={users[0]} />}
          {users[1] && <Podium position={1} user={users[1]} />}
        </PodiumContainer>
        {usersLeft.map((user, index) => <UserRank key={index} user={user} position={index + 4}/> )}
      </TopUsersContainer>
    )
  }
}

const mapStateToProps = state => ({
  token: state.member.token,
  users: state.user.usersTop,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsersTop: (token) => loadUsersTop(token, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
