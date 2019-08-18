import React from 'react';
import { View, Text } from 'react-native';

export default class MyProgressScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>My Progress Screen</Text>
      </View>
    );
  }

}

MyProgressScreen.navigationOptions = {
  title: 'My Progress',
};
