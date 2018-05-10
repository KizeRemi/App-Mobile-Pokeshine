import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { BackgroundWhite, ProfileTitleSettings, InputContainer } from '../../../components/Views';
import { TextTitleSettings, TextDescriptionSettings, TextLabel } from '../../../components/Texts';
import { Input } from '../../../components/Inputs';

import { newShiny } from '../../../actions/pokemon';
import Button from '../../../components/Button';

class NewShiny extends Component {
  static propTypes = {
    token: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { catchDate: '', description: '', youtube: '' };
  }

  handleChange = (name, val) => {
    this.setState({ ...this.state, [name]: val });
  }

  submitForm = () => {
    const { token, number, newShiny } = this.props;
    newShiny(token, number, this.state);
  }

  render() {
    const { catchDate, description, youtube } = this.state;
    return (
      <BackgroundWhite>        
        <ProfileTitleSettings>
          <TextTitleSettings>Ajouter un shiny</TextTitleSettings>
          <TextDescriptionSettings>Afin que votre shiny soit validé et bien visible, merci de donner un maximum d'informations.</TextDescriptionSettings>
        </ProfileTitleSettings>
        <InputContainer>
          <TextLabel>Date de capture</TextLabel>
          <Input
            autoCapitalize="none"
            placeholder="Ex: 2018-01-01"
            value={catchDate.toString()}
            maxLength={10}
            onChangeText={v => this.handleChange('catchDate', v)}
          />
          <TextLabel>Description</TextLabel>
          <Input
            autoCapitalize="none"
            placeholder="Comment l'avez vous capturé?"
            value={description}
            maxLength={255}
            multiline
            numberOfLines={4}
            onChangeText={v => this.handleChange('description', v)}
          />
          <TextLabel>Vidéo Youtube (uniquement l'id)</TextLabel>
          <Input
            autoCapitalize="none"
            placeholder="Ex: AZhYdhqYz"
            value={youtube}
            maxLength={20}
            onChangeText={v => this.handleChange('youtube', v)}
          />
        </InputContainer>
        <Button label={'Ajouter'} onPress={this.submitForm} isLoading={this.props.isLoading} />
      </BackgroundWhite>
    )
  }
}

const mapStateToProps = state => ({
  token: state.member.token,
  isLoading: state.shiny.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    newShiny: (token, number, formData) => newShiny(token, number, formData, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewShiny);