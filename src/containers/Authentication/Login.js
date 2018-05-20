import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InputAuth } from '../../components/Inputs';
import { LoginContainer, LoginTitleContainer, ErrorContainer, Line } from '../../components/Views';
import { AuthButton } from '../../components/Buttons';
import { TitleLoginText, ErrorLoginText } from '../../components/Texts';
import { login } from '../../actions/auth';

class Login extends Component {
  static propTypes = {
    member: PropTypes.shape({}).isRequired,
    login: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleSubmit = () => {
    this.props.login(this.state);
  }

  handleChange = (name, val) => {
    this.setState({
      ...this.state,
      [name]: val,
    });
  }

  render() {
    const { isLoading, error, toggleAuthentication } = this.props;
    return (
      <LoginContainer>
        <LoginTitleContainer>
          <TitleLoginText>{'Connexion à Pokeshine'.toUpperCase()}</TitleLoginText>
        </LoginTitleContainer>
        <ErrorContainer>
          <ErrorLoginText>{error}</ErrorLoginText>
        </ErrorContainer>
        <InputAuth
          placeholder="Nom d'utilisateur..."
          placeholderTextColor="#b2b2b2"
          value={this.state.username}
          onChangeText={v => this.handleChange('username', v)}
        />
        <InputAuth
          placeholder='Mots de passe...'
          placeholderTextColor="#b2b2b2"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={v => this.handleChange('password', v)}
        />
        <AuthButton onPress={this.handleSubmit}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) :  (
            <TitleLoginText>{'Connexion'.toUpperCase()}</TitleLoginText>
          )}
        </AuthButton>
        <Line />
        <AuthButton onPress={() => toggleAuthentication('signUp')}>
          <TitleLoginText>Tu shasses ? Inscris toi !</TitleLoginText>
        </AuthButton>
      </LoginContainer>
    );
  }
}

const mapStateToProps = state => ({
  member: state.member || {},
  isLoading: state.member.isLoading,
  error: state.member.error,
});

const mapDispatchToProps = (dispatch) => {
  return {  
    login: (formData) => login(formData, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);