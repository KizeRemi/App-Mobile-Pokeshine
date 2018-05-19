import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BackgroundWhite, ProfileTitleSettings, InputContainer } from '../../../components/Views';
import { TextTitleSettings, TextDescriptionSettings, TextLabel, ShinyPictureLabel } from '../../../components/Texts';
import { ShinyPictureButton } from '../../../components/Buttons';
import { Input } from '../../../components/Inputs';
import { PictureIcon, PictureOkIcon } from '../../../components/Icons';
import { Actions } from 'react-native-router-flux';

import { newShiny } from '../../../actions/pokemon';
import Button from '../../../components/Button';
import Pokemon from './Pokemon';
import { Permissions, ImagePicker } from 'expo';

class NewShiny extends Component {
  static propTypes = {
    token: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { permissionsGranted: false, catchDate: '', description: '', youtube: '', tries: 0, image: null };
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ permissionsGranted: status === 'granted' });
  }

  handleChange = (name, val) => {
    this.setState({ ...this.state, [name]: val });
  }

  submitForm = () => {
    const { token, number, newShiny } = this.props;
    newShiny(token, number, this.state);
    Actions.collector();
  }

  takePicture = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ base64: true, aspect: [3, 4] });
    if (!result.cancelled) {
      this.setState({ image: result.base64 });
    }
  }

  render() {
    const { catchDate, description, youtube, tries, image } = this.state;
    return (
      <BackgroundWhite>
        <Pokemon number={this.props.number}/>
        <ProfileTitleSettings>
          <TextTitleSettings>Ajouter un shiny</TextTitleSettings>
          <TextDescriptionSettings>Afin que votre shiny soit validé et bien visible, merci de donner un maximum d'informations.</TextDescriptionSettings>
        </ProfileTitleSettings>
        <InputContainer>
          <ShinyPictureButton onPress={this.takePicture}>
            <PictureIcon></PictureIcon>
            <ShinyPictureLabel> Ajouter une photo </ShinyPictureLabel>
            {image && <PictureOkIcon></PictureOkIcon>}
          </ShinyPictureButton>
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
          <TextLabel>Nombre d'essais</TextLabel>
          <Input
            autoCapitalize="none"
            placeholder="Ex: 234"
            value={tries.toString()}
            maxLength={5}
            onChangeText={v => this.handleChange('tries', v)}
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