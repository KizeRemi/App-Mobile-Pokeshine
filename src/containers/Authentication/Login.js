import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Content, Form, Icon, Input, Item, Text } from 'native-base';
import Header from './Header';
import { login } from '../../actions/auth';

const styles = StyleSheet.create({
  layoutCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});

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
      <Content style={{ padding: 30 }}>
        <Header />
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
          <Text>Se connecter sur Pokeshine</Text>
        </View>
        <Form style={{ marginBottom: 20 }}>
          <Item style={{ marginLeft: 0, marginBottom: 20 }}>
            <Icon active name='mail' />
            <Input
              placeholder='Nom d\utilisateur'
              placeholderTextColor="#b2b2b2"
              value={this.state.username}
              onChangeText={v => this.handleChange('username', v)}
            />
          </Item>
          <Item style={{ marginLeft: 0 }}>
            <Icon active name='lock' />
            <Input
              placeholder='Mots de passe'
              placeholderTextColor="#b2b2b2"
              secureTextEntry
              onChangeText={v => this.handleChange('password', v)}
            />
          </Item>
        </Form>
        <TouchableOpacity onPress={this.handleSubmit}>
          <View>
            <Text>Connexion</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.layoutCenter} onPress={() => toggleAuthentication('signUp')}>
          <Text>Tu shasses ? Inscris toi !</Text>
        </TouchableOpacity>
      </Content>
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