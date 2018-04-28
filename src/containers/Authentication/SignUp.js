import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Content, Form, Input, Item, Label, Text } from 'native-base';
import Header from './Header';
import { signUp } from '../../actions/auth';

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
    return (
      <Content style={{ padding: 30 }}>
        {success && <View><Text>Le compte a bien été enregistré.</Text></View>}
        {error && <View><Text>{error}</Text></View>}
        <View style={{ alignItems: 'center' }}>
          <Text>Créer un compte Pokeshine</Text>
        </View>
        <Form style={{ marginBottom: 20 }}>
          <Item floatingLabel style={{ marginLeft: 0 }}>
            <Label style={{ width: 200 }}>Pseudo</Label>
            <Input onChangeText={v => this.handleChange('userName', v)} />
          </Item>
          <Item floatingLabel style={{ marginLeft: 0 }}>
            <Label style={{ width: 200 }}>Email</Label>
            <Input
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={v => this.handleChange('email', v)}
            />
          </Item>
          <Item floatingLabel style={{ marginLeft: 0 }}>
            <Label style={{ width: 200 }}>Mots de passe</Label>
            <Input
              secureTextEntry
              onChangeText={v => this.handleChange('password', v)}
            />
          </Item>
          <Item floatingLabel style={{ marginLeft: 0 }}>
            <Label style={{ width: 200 }}>Répéter mots de passe</Label>
            <Input
              secureTextEntry
              onChangeText={v => this.handleChange('password2', v)}
            />
          </Item>
        </Form>
        <TouchableOpacity onPress={this.handleSubmit}>
          <View>
            <Text>S'inscrivre</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.layoutCenter, { marginTop: 20 }]} onPress={() => toggleAuthentication('login')}>
          <Text>Revenir à la page connexion</Text>
        </TouchableOpacity>
      </Content>
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