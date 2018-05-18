import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo';
import { TextUsername, TextRank } from '../../components/Texts';
import { UpdateIcon } from '../../components/Icons';
import { Camera, Permissions, ImagePicker } from 'expo';
import { Actions } from 'react-native-router-flux';
import Avatar from './Avatar';

class ProfileHeader extends PureComponent {
  static propTypes = {
    member: PropTypes.shape({}).isRequired,
  }

  render () {
    const { member } = this.props;
    return (      
      <View
        style={{ width: '100%', paddingVertical: 30, backgroundColor: '#b3dbfd', alignItems: 'center', height: 250 }}
      >
        <Avatar member={member} />
        <View style={{ flex: 1, flexDirection: 'row', margin: 0 }}>
          <TextUsername>{member.username.toUpperCase()} 
          </TextUsername>
          <TouchableOpacity style={{ marginLeft: 5 }}  onPress={Actions.settings}>
            <UpdateIcon></UpdateIcon>
          </TouchableOpacity>   
        </View>
        <TextRank>Shiny hunter confirmé</TextRank>
      </View>
    );
  }
}

export default ProfileHeader;