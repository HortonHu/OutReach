import React from 'react';
import { StyleSheet, Button, View, Image, Text } from 'react-native';
import { Video } from 'expo-av';


export default class DailyExercisesScreen extends React.Component {
  componentDidMount() {
    console.log("Go to Daily Exercises Screen.");
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Daily Exercises Screen</Text>

        <Video
          source={require('../assets/videos/Stretch_Scapula_1.mp4')}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{width: 300, height: 300}}
        />
      </View>
    );
  }

}

DailyExercisesScreen.navigationOptions = {
  title: 'Daily Exercises',
};
