import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  AsyncStorage,
  TouchableOpacity,
  Image
} from 'react-native';


// export default function CarePlanScreen() {
export default class CarePlanScreen extends React.Component {
  render() {
    return (
      <View style={styles.planContainer}>

        <View style={styles.buttonRowContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DailyExercises')}
            >
              <Image source={require('../assets/images/Daily_Exercises.png')} />
            </TouchableOpacity>
            <Button
              title="Daily Exercises"
              onPress={() => this.props.navigation.navigate('DailyExercises')}
              color="darkgray"
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('CaregiverLog')}
            >
              <Image source={require('../assets/images/Care_Giver_Log.png')} />
            </TouchableOpacity>
            <Button
              title="Caregiver Log"
              onPress={() => this.props.navigation.navigate('CaregiverLog')}
              color="darkgray"
            />
          </View>
        </View>

        <View style={styles.buttonRowContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('MyProgress')}
            >
              <Image source={require('../assets/images/My_Progress.png')} />
            </TouchableOpacity>
            <Button
              title="My Progress"
              onPress={() => this.props.navigation.navigate('MyProgress')}
              color="darkgray"
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ActivityLog')}
            >
              <Image source={require('../assets/images/Activity_Log.png')} />
            </TouchableOpacity>
            <Button
              title="Activity Log"
              onPress={() => this.props.navigation.navigate('ActivityLog')}
              color="darkgray"
            />
          </View>
        </View>

        <Button
          color='red'
          title="Sign Out"
          onPress={this._signOutAsync}
        />


      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

CarePlanScreen.navigationOptions = {
  title: 'My Care Plan'
};


const styles = StyleSheet.create({
  planContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-around',
    // flexWrap: 'wrap',
  },
  buttonRowContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    flex: 1,
    width: '50%',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
