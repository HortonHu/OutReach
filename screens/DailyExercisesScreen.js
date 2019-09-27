import React from 'react';
import { StyleSheet, Button, View, TextInput, Text } from 'react-native';


export default class DailyExercisesScreen extends React.Component {
  state = {};

  render() {
    const videos = [
      'Stretch_Scapula_1',
      'Active_Ulnar_Deviation_1',
      'Elbow_Flexion',
      'Wrist_Windshield_Wiper_1',
    ];

    const createVideos = () => {
      let videoButtons = [];

      videos.forEach((videoName) => {

        videoButtons.push(
          <Button
            key={videoName.toString()}
            title={videoName.toString()}
            onPress={() => this.props.navigation.navigate('ExerciseVideo', {
              videoName: videoName
            })}
            styles={styles.button}
          />
        );
      });

      return videoButtons;
    };

    return (
      <View style={styles.container}>
        <Text>Daily Exercises Screen</Text>

        {createVideos()}
      </View>
    );
  }
}

DailyExercisesScreen.navigationOptions = {
  title: 'Daily Exercises',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
});
