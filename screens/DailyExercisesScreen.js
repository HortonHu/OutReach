import React from 'react';
import { StyleSheet, Button, View, TextInput, Text, TouchableNativeFeedback } from 'react-native';


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
          <TouchableNativeFeedback
            key={videoName.toString()}
            onPress={() => this.props.navigation.navigate('ExerciseVideo', {
              videoName: videoName
            })}
          >
            <View
              style={styles.button}
            >
              <Text style={{color:'white'}}>{videoName.toString()}</Text>
            </View>

          </TouchableNativeFeedback>

        );
      });

      return videoButtons;
    };

    return (
      <View style={styles.container}>
        <Text>Daily Exercises Screen</Text>

        <View style={styles.buttonsContainer}>
          {createVideos()}
        </View>
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
  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'gray',
    width: "100%",
    marginHorizontal: 20,
    marginVertical: 20,
  }
});
