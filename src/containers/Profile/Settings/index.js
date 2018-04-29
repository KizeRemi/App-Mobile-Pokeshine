import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { Background } from '../../../components/Views';

class Profile extends Component {

	disconnect = () => {
		this.props.dispatch({ type: 'USER_RESET_TOKEN' });
	}

  render() {
    return (
      <Background>
        <TouchableOpacity onPress={this.disconnect}>
          <Text>Se déconnecter</Text>
        </TouchableOpacity>
      </Background>   
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   dispatch,
  }
};

export default connect(null, mapDispatchToProps)(Profile);