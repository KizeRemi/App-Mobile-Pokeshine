import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Camera, Permissions, ImagePicker } from 'expo';
import { ImageProfile } from '../../components/Images';
import { updateAvatar } from '../../actions/member';

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = { permissionsGranted: false, type: Camera.Constants.Type.front };
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ permissionsGranted: status === 'granted' });
  }

  takePicture = async () => {
    const { member, updateAvatar } = this.props;
    const result = await ImagePicker.launchImageLibraryAsync({ base64: true, aspect: [3, 4] });
    if (!result.cancelled) {
      updateAvatar(member.token, result.base64);
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this.takePicture}>
        <ImageProfile
          source={{uri: 'http://www.pokeshine.remi-mavillaz.fr/uploads/avatars/' + this.props.member.avatar }}
        />
      </TouchableOpacity> 
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAvatar: (token, base64) => updateAvatar(token, base64, dispatch),
  }
};

export default connect(null, mapDispatchToProps)(Avatar);