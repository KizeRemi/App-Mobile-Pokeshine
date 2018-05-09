import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Camera, Permissions } from 'expo';

class CameraScreen extends Component {

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ permissionsGranted: status === 'granted' });
  }

  render() {
    return (
      <Camera
        style={{ flex: 1 }}
        useCamera2Api={true}
      >
      </Camera>   
    )
  }
}

const mapStateToProps = state => ({
  member: state.member,
  isLoading: state.member.isLoading,
});

export default connect(mapStateToProps, null)(CameraScreen);