import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LoginContainer, LoginTitleContainer, ErrorContainer, Line } from '../../components/Views';
import { TitleLoginText, ErrorLoginText, BackLoginText } from '../../components/Texts';
import { AuthButton } from '../../components/Buttons';
import { InputAuth } from '../../components/Inputs';
import { signUp } from '../../actions/auth';
import { Text } from 'react-native';

const styles = StyleSheet.create({
  layoutCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
});

class Login extends Component {
  static propTypes = {
    member: PropTypes.shape({}).isRequired,
    signUp: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: '',
      password2: '',
    };
  }

  handleChange = (name, val) => {
    this.setState({
      ...this.state,
      [name]: val,
    });
  }

  handleSubmit = () => {
    this.props.signUp(this.state);
  }

  render() {
    const { isLoading, error, toggleAuthentication, success } = this.props;
    console.log(error);
    return (
      <LoginContainer>
        <LoginTitleContainer>
          <TitleLoginText>{'Création de compte'.toUpperCase()}</TitleLoginText>
        </LoginTitleContainer>
        {success && <ErrorLoginText>Votre compte a bien été créé.</ErrorLoginText>}
        <ErrorContainer>
          <ErrorLoginText>{error}</ErrorLoginText>
        </ErrorContainer>
        <InputAuth
          placeholder="Nom d'utilisateur..."
          placeholderTextColor="#b2b2b2"
          value={this.state.userName}
          onChangeText={v => this.handleChange('userName', v)}
        />
        <InputAuth
          placeholder="Ex: user@gmail.com"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={v => this.handleChange('email', v)}
        />
        <InputAuth
          placeholder="Mots de passe..."
          secureTextEntry
          onChangeText={v => this.handleChange('password', v)}
        />
        <InputAuth
          placeholder="Répéter mots de passe..."
          secureTextEntry
          onChangeText={v => this.handleChange('password2', v)}
        />
        <AuthButton onPress={this.handleSubmit}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) :  (
          <TitleLoginText>{`S'inscrire`.toUpperCase()}</TitleLoginText>
        )}
        </AuthButton>
        <Line />
        <TouchableOpacity style={[styles.layoutCenter]} onPress={() => toggleAuthentication('login')}>
          <BackLoginText>{`Revenir à la page de connexion`}</BackLoginText>
        </TouchableOpacity>
      </LoginContainer>
    );
  }
}

const mapStateToProps = state => ({
  member: state.member,
  isLoading: state.member.isLoading,
  error: state.member.error,
  success: state.member.success,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (formData) => signUp(formData, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);