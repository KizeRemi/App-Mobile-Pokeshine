import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, TextInput, Vibration } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Camera, Permissions } from 'expo';
import { updateAvatar } from '../../../actions/member';

class CameraScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { permissionsGranted: false, type: Camera.Constants.Type.front };
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ permissionsGranted: status === 'granted' });
  }

  takePicture = async () => {
    const { member, updateAvatar } = this.props;
    if (this.camera) {
      this.camera.takePictureAsync({ quality:0, base64: true }).then(data => {
        updateAvatar(member.token, data.base64);
        Actions.profile();
      });
    }
  }

  render() {
    return (
      <Camera        
        ref={ref => {
          this.camera = ref;
        }}
        ratio="1:1"
        style={{ flex: 1 }}
        useCamera2Api={true}
        type={this.state.type}
      >
        <TouchableOpacity
            style={{ flex: 0.3, alignSelf: 'flex-end' }}
            onPress={this.takePicture}>
            <Text style={{ color: '#FFF' }}> SNAP </Text>
        </TouchableOpacity>
      </Camera>   
    )
  }
}

const mapStateToProps = state => ({
  member: state.member,
  isLoading: state.member.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateAvatar: (token, base64) => updateAvatar(token, base64, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CameraScreen);