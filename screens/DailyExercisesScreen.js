import React from 'react';
import { View, Text } from 'react-native';

export default class DailyExercisesScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Daily Exercises Screen</Text>
      </View>
    );
  }

}

DailyExercisesScreen.navigationOptions = {
  title: 'Daily Exercises',
};
