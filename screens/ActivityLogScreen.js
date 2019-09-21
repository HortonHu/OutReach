import React from 'react';
import { View, Button, Text, StyleSheet, TouchableNativeFeedback, ScrollView} from 'react-native';

export default class ActivityLogScreen extends React.Component {
  state = {
    Q1selectedIndex: -1,
    Q2selectedIndex: -1,
  };

  Q1selections = [
    "Did not use my weaker arm (not used).",
    "Occasionally used my weaker arm but only very rarely (very rarely).",
    "Sometimes used my weaker arm but did the activity most of the time with stronger (rarely).",
    "Used my weaker about half as much as before the stroke (half pre-stroke).",
    "Used my weaker arm almost as much as before the stroke (3/4 pre-stroke)",
    "Used my weaker arm as often as before the stroke (same as pre-stroke).",
  ];

  Q2selections = [
    "My weaker arm was not used at all for that activity (not used).",
    "My weaker arm was moved during that activity but was not helpful (very poor).",
    "My weaker arm was of some use during that activity but need some help from the stronger arm, moved very slowly, or with difficulty (poor).",
    "My weaker arm was used for that activity but the movements were slow or made only with some efforts (fair).",
    "The movements made by my weaker arm for that activity were almost normal but not quite as fast or accurate as normal (almost normal).",
    "The ability to use my weaker arm for that activity was as good as before the stroke (normal).",
  ];

  render() {
    let Q1selectionItems = [];
    for (let i = 0; i < this.Q1selections.length; i++) {
      let index = i;
      let item = this.Q1selections[index];
      Q1selectionItems.push(
        <TouchableNativeFeedback
          key={item}
          onPress={() => {
            this.setState({Q1selectedIndex: index})
          }}
        >
          <View style={{
            backgroundColor: (index === this.state.Q1selectedIndex ? 'darkgrey' : 'white'),
            marginRight: 5,
            marginLeft: 5,
            padding: 5,
          }}>
            <Text>{item}</Text>
          </View>
        </TouchableNativeFeedback>
      );
    }

    let Q2selectionItems = [];
    for (let i = 0; i < this.Q2selections.length; i++) {
      let index = i;
      let item = this.Q2selections[index];
      Q2selectionItems.push(
        <TouchableNativeFeedback
          key={item}
          onPress={() => {
            this.setState({Q2selectedIndex: index})
          }}
        >
          <View style={{
            backgroundColor: (index === this.state.Q2selectedIndex ? 'darkgrey' : 'white'),
            marginRight: 5,
            marginLeft: 5,
            padding: 5,
          }}>
            <Text>{item}</Text>
          </View>
        </TouchableNativeFeedback>
      );
    }


    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.topBarContainer}>
            <Text>Select One For Each Question</Text>
          </View>

          <View style={styles.questionsContainer}>
            <View style={styles.questionContainer}>
              <Text style={{fontWeight: 'bold'}}>Question1</Text>
              {Q1selectionItems}
            </View>

            <View style={styles.questionContainer}>
              <Text style={{fontWeight: 'bold'}}>Question2</Text>
              {Q2selectionItems}
            </View>

          </View>

          <View style={styles.buttonContainer}>
            <Button
              title="Save"
              onPress={() => {
                alert('save')
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

ActivityLogScreen.navigationOptions = {
  title: 'Activity Log',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topBarContainer: {
    alignItems: 'center',
    width: "100%",
    borderColor: 'black',
    borderWidth: 1,
  },
  questionsContainer: {
    flex: 1,
    width: "100%",
  },
  questionContainer: {
    marginTop: 10,
  },
  selection: {
    flex: 1,
    marginRight: 5,
    marginLeft: 5,
    padding: 5,
  },
  buttonContainer: {
    marginTop: 40,
    marginBottom: 40,
  },
});
