import React from 'react';
import { StyleSheet, Button, View, TextInput, Text } from 'react-native';
import { Video } from 'expo-av';


export default class exerciseVideoScreen extends React.Component {

  state = {
    set1_num: '',
    set2_num: '',
    set3_num: '',
  };

  render() {
    const { navigation } = this.props;
    const videoName = navigation.getParam('videoName');

    const getVideoSource = (videoName) => {
      switch (videoName) {
        case "Stretch_Scapula_1":
          return require('../assets/videos/Stretch_Scapula_1.mp4');
        case "Active_Ulnar_Deviation_1":
          return require('../assets/videos/Active_Ulnar_Deviation_1.mp4');
        case "Elbow_Flexion":
          return require('../assets/videos/Elbow_Flexion.mp4');
        case "Wrist_Windshield_Wiper_1":
          return require('../assets/videos/Wrist_Windshield_Wiper_1.mp4');
        default:
          return require('../assets/videos/Stretch_Scapula_1.mp4');
      }
    };

    return (
      <View style={styles.container}>
        <Text>Exercise Video {videoName}</Text>

        <Video
          source={getVideoSource(videoName)}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.video}
        />

        <View style={styles.setsContainer}>
          <View style={styles.setRecordContainer}>
            <Text style={styles.text}>Set1 Reps Completed</Text>
            <TextInput
              style={styles.input}
              placeholder="0"
              keyboardType='numeric'
              onChangeText={
                (set1_num) => this.setState({set1_num})
              }
              value={this.state.set1_num}
            />
          </View>

          <View style={styles.setRecordContainer}>
            <Text style={styles.text}>Set2 Reps Completed</Text>
            <TextInput
              style={styles.input}
              placeholder="0"
              keyboardType='numeric'
              onChangeText={
                (set2_num) => this.setState({set2_num})
              }
              value={this.state.set2_num}
            />
          </View>

          <View style={styles.setRecordContainer}>
            <Text style={styles.text}>Set3 Reps Completed</Text>
            <TextInput
              style={styles.input}
              placeholder="0"
              keyboardType='numeric'
              onChangeText={
                (set3_num) => this.setState({set3_num})
              }
              value={this.state.set3_num}
            />
          </View>
        </View>

      </View>
    );
  }
};

exerciseVideoScreen.navigationOptions = {
  title: 'Exercise Video',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  setsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  setRecordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  video: {
    width: 300,
    height: 300,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: 100,
    marginLeft: 10,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  }
});
