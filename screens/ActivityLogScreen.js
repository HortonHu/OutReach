import React from 'react';
import { View, Text } from 'react-native';

export default class ActivityLogScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Activity Log Screen</Text>
      </View>
    );
  }

}

ActivityLogScreen.navigationOptions = {
  title: 'Activity Log',
};
