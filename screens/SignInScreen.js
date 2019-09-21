import React from 'react';
import { Button, View, AsyncStorage, StyleSheet, Text, TextInput } from 'react-native';

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
        <Text style={styles.title}>OutReach Patient</Text>

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
        <Button color="darkgray" title="Sign in" onPress={this._signInAsync}/>
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
  title: {
    fontWeight: 'bold',
    color: 'darkgray',
    fontSize: 30,
    marginBottom: 40
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    backgroundColor: 'white',
    margin: 5,
  },
});
