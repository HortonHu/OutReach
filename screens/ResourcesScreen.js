import React from 'react';
import { View, Text } from 'react-native';

// export default function DailyExercisesScreen() {
export default class ResourcesScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Resources Screen</Text>
      </View>
    );
  }

}

ResourcesScreen.navigationOptions = {
  title: 'Resources',
};
