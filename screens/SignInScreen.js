import React from 'react';
import { Button, View, AsyncStorage, StyleSheet, Text, TextInput, TouchableNativeFeedback, Image } from 'react-native';

export default class SignInScreen extends React.Component {
  state = {
    username: '',
    password: '',
  };

  static navigationOptions = {
    header: null,
  };

  getPasswordDisplayString(password) {
    let display = '';
    for (let i = 0; i < password.length; i++) {
      display = display + '*';
    }

    return display;
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/outREACH_Logo.png')}
          style={styles.logo}
        />

        <Text style={styles.introduction}>Bringing rehabilitation from the clinic to your home</Text>

        <TextInput
          style={styles.input}
          placeholder=" Username"
          onChangeText={
            (username) => this.setState({username: username})
          }
          value={this.state.username}
        />
        <TextInput
          style={styles.input}
          placeholder=" Password"
          onChangeText={
            (password) => this.setState({password: password})
          }
          value={this.getPasswordDisplayString(this.state.password)}
        />
        {/*<Button color="darkgray" title="Login" onPress={this._signInAsync}/>*/}
        <TouchableNativeFeedback
          onPress={this._signInAsync}
          style={styles.loginButton}
        >
          <Text
            style={styles.loginText}
          >
            Login
          </Text>
        </TouchableNativeFeedback>

      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2D3A4B',
  },
  logo: {
    width: 300,
    height: 75,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
  },
  introduction: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
    marginBottom: 40
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    backgroundColor: 'gray',
    color: 'white',
    fontWeight: 'bold',
    paddingStart: 10,
    margin: 5,
  },
  loginButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginText: {
    fontSize: 15,
    backgroundColor: 'gray',
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
  }
});
