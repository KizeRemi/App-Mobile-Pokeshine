import React, { Component } from 'react';
import { BackgroundAuth, CenteredBloc } from '../../components/Views';
import Login from './Login';
import SignUp from './SignUp';
import { Image } from 'react-native';
import Logo from '../../images/logo-auth.png';

class Authentification extends Component {

  constructor(props) {
    super(props);
    this.state = { page: 'login' };
  }

  toggleAuthentication = (page) => {
    this.setState({ page });
  }

  render() {
    const { page } = this.state;
    return (
      <BackgroundAuth>
        <CenteredBloc>
          <Image style={{ marginTop: 100, width: 160, height: 180}} source={Logo} />
        </CenteredBloc>
        {page === 'login' && <Login toggleAuthentication={this.toggleAuthentication} />}
        {page === 'signUp' && <SignUp toggleAuthentication={this.toggleAuthentication} />}
      </BackgroundAuth>
    );
  }
}

export default Authentification;