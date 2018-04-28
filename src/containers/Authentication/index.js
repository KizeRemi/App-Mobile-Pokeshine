import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'native-base';

import Login from './Login';
import SignUp from './SignUp';

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
      <Container>
        {page === 'login' && <Login toggleAuthentication={this.toggleAuthentication} />}
        {page === 'signUp' && <SignUp toggleAuthentication={this.toggleAuthentication} />}
      </Container>
    );
  }
}

export default Authentification;