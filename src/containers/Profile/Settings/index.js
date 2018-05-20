import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { BackgroundWhite, ProfileTitleSettings, InputContainer } from '../../../components/Views';
import { Input, Textarea } from '../../../components/Inputs';
import { TextDescriptionSettings, TextLabel } from '../../../components/Texts';
import Button from '../../../components/Button';

import { updateProfile } from '../../../actions/member';

class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      age: props.member.age || '',
      friendCode: props.member.friendCode || '',
      region: props.member.region || '',
      description: props.member.description || '',
    };
  }

  handleChange = (name, val) => {
    this.setState({
      ...this.state,
      [name]: val,
    });
  }

  submitForm = () => {
    const { member, updateProfile } = this.props;
    updateProfile(member.token, this.state);
  }

	disconnect = () => {
		this.props.dispatch({ type: 'USER_RESET_TOKEN' });
  }

  render() {
    const { age, friendCode, region, description } = this.state;
    return (
      <BackgroundWhite>
        <ProfileTitleSettings>
          <TextDescriptionSettings>Un profil bien rempli est un profil plus susceptible d'être vu.</TextDescriptionSettings>
        </ProfileTitleSettings>
        <InputContainer>
          <TextLabel>Ton âge</TextLabel>
          <Input
              autoCapitalize="none"
              placeholder="Ex: 20..."
              keyboardType="numeric"
              value={age.toString()}
              maxLength={2}
              onChangeText={v => this.handleChange('age', v)}
          />
          <TextLabel>Ta région</TextLabel>
          <Input
              autoCapitalize="none"
              placeholder="Ex: Hauts de France"
              value={region}
              maxLength={20}
              onChangeText={v => this.handleChange('region', v)}
          />
          <TextLabel>Ton code ami</TextLabel>
          <Input
              autoCapitalize="none"
              placeholder="Ex: Hauts de France"
              keyboardType="numeric"
              maxLength={12}
              value={friendCode.toString()}
              onChangeText={v => this.handleChange('friendCode', v)}
          />
          <TextLabel>Parle-nous un peu de toi !</TextLabel>
          <Textarea
              placeholder="Parle-nous un peu de toi !"
              multiline
              editable
              numberOfLines={4}
              value={description}
              maxLength={255}
              onChangeText={v => this.handleChange('description', v)}
          />
        </InputContainer>
        <Button label={'Mettre à jour'} onPress={this.submitForm} isLoading={this.props.member.isLoading} />
        <TouchableOpacity onPress={this.disconnect}><Text>Sedéconnecter</Text></TouchableOpacity>
      </BackgroundWhite>
    )
  }
}

const mapStateToProps = state => ({
  member: state.member,
  isLoading: state.member.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (token, formData) => updateProfile(token, formData, dispatch),
    dispatch,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);