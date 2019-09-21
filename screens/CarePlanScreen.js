import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  AsyncStorage,
} from 'react-native';


// export default function CarePlanScreen() {
export default class CarePlanScreen extends React.Component {
  render() {
    return (
      <View style={styles.planContainer}>

        <View style={styles.buttonRowContainer}>
          <View style={styles.buttonContainer}>
            <Button
              title="Daily Exercises"
              onPress={() => this.props.navigation.navigate('DailyExercises')}
              color="darkgray"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Caregiver Log"
              onPress={() => this.props.navigation.navigate('CaregiverLog')}
              color="darkgray"
            />
          </View>
        </View>

        <View style={styles.buttonRowContainer}>
          <View style={styles.buttonContainer}>
            <Button
              title="My Progress"
              onPress={() => this.props.navigation.navigate('MyProgress')}
              color="darkgray"
            />
          </View>
          <View style={styles.buttonContainer}>
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
    // flex: 1,
  },
});
