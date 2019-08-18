import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class SchedulerScreen extends React.Component{
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Scheduler Screen</Text>
      </View>
    );
  }
}

SchedulerScreen.navigationOptions = {
  title: 'Scheduler',
};
