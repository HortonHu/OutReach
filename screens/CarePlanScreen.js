import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  AsyncStorage,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';


export default class CarePlanScreen extends React.Component {
  render() {
    return (
      <View style={styles.planContainer}>

        <View style={styles.buttonRowContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DailyExercises')}
              style={styles.pic}
            >
              <Image source={require('../assets/images/Daily_Exercises.png')} />
            </TouchableOpacity>

            <Text style={styles.titleContainer}>Daily Exercises</Text>

          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('CaregiverLog')}
              style={styles.pic}
            >
              <Image source={require('../assets/images/Care_Giver_Log.png')} />
            </TouchableOpacity>

            <Text style={styles.titleContainer}>Caregiver Log</Text>
          </View>
        </View>

        <View style={styles.buttonRowContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('MyProgress')}
              style={styles.pic}
            >
              <Image source={require('../assets/images/My_Progress.png')} />
            </TouchableOpacity>

            <Text style={styles.titleContainer}>My Progress</Text>

          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ActivityLog')}
              style={styles.pic}
            >
              <Image source={require('../assets/images/Activity_Log.png')} />
            </TouchableOpacity>

            <Text style={styles.titleContainer}>Activity Log</Text>

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
  headerStyle: {
    backgroundColor: '#2D3A4B',
  },

  headerTitle: (<Image
    style={{width: 150, height: 38}}
    source={require('../assets/images/outREACH_Logo_100_25.png')}/>),

  // title: 'Out Reach',
  // headerTintColor: '#fff',
  // headerTitleStyle: {
  //   fontWeight: 'bold',
  //   fontSize: 25,
  // },

};


const styles = StyleSheet.create({
  planContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-around',
    // flexWrap: 'wrap',
    backgroundColor: '#2D3A4B',
  },
  buttonRowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  pic: {
    // flex: 1,
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 2,
  },
  titleContainer: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  logo: {
    width: 300,
    height: 75,
  },

});
