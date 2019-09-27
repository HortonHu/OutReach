import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Animated, Dimensions, StyleSheet,ScrollView } from 'react-native';
import { SizeClassIOS } from 'expo/build/ScreenOrientation/ScreenOrientation';

/*
Notes:
As of 9/23/19:
  Need to add:
    • Functionality to record answers
    • End of questions link back to CarePlan (via popup dialog?)
    • Possible change of StyleSheet/Flexbox to shrink touchable opacity size

*/

export default class CaregiverLogScreen extends React.Component {
  state = {
    index: 0,
    questions: [
      "Sleep is disturbed.\n\nFor example:\n• Family member is in and out of bed at night.",
      "Some behavior is upsetting.\n\nFor example:\n• Has trouble remembering things.\n• Accuses people of taking things.",
      "There have been work adjustments.\n\n• For example:\n• Having to take time off.",
      "Thank you!"
    ],
    animation: new Animated.Value(0),
    progress: new Animated.Value(0)
  };

  handleAnswer = () => {
    Animated.parallel([
      Animated.timing(this.state.progress,{
        toValue: this.state.index + 1, //possibly change to + 2 or reformat
        duration: 400,
      }),

      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 400
      })
    ]).start(() => {

      this.setState((state) => {
        return {
          index: state.index + 1
        }
      }, () => {
        this.state.animation.setValue(0)
      })
    });
  }

  render() {
    const { questions, index } = this.state;
    const { width } = Dimensions.get("window")

    const progressInterpolate = this.state.progress.interpolate({
      inputRange: [0,questions.length],
      outputRange: ["0%","100%"]
    })

    const progressStyle = {
      width: progressInterpolate
    }

    const mainQuestionInterpolate = this.state.animation.interpolate({
      inputRange: [0,1],
      outputRange: [0, -width]
    })

    const nextQuestionInterpolate = this.state.animation.interpolate({
      inputRange: [0,1],
      outputRange: [width, 0]
    })

    const mainStyle = {
      transform: [
        {
          translateX: mainQuestionInterpolate
        }
      ]
    }
    const nextStyle = {
      transform: [
        {
          translateX: nextQuestionInterpolate
        }
      ]
    }

    const question = questions[index];
    let nextQuestion;

    if (index + 1 < questions.length) {
      nextQuestion = questions[index + 1];
    
    }


    return (
      <View style = {styles.container}> 
        <View style = {[StyleSheet.absoluteFill, styles.overlay]}>
          <Animated.Text style = {[styles.questionText,mainStyle]}>
            {question}
          </Animated.Text>
          <Animated.Text style = {[styles.questionText,nextStyle]}>
            {nextQuestion}
          </Animated.Text>
        </View>

        <View style = {styles.progress}>
          <Animated.View style = {[styles.bar, progressStyle]}>

          </Animated.View>
        </View>

        <TouchableOpacity onPress = {this.handleAnswer}
        activeOpacity={.7} style = {styles.option}>
          <Text style = {styles.optionText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {this.handleAnswer}
        activeOpacity={.7} style = {styles.option}>
          <Text style = {styles.optionText}>No</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

CaregiverLogScreen.navigationOptions = {
  title: 'Caregiver Log',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "row"
  },
  overlay: {
    alignItems: "center",
    justifyContent: "center",
  },
  questionText: {
    color: "#1e90ff",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    position: 'absolute',
  },
  option: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  optionText: {
    fontSize: 30,
    color: "red",
    marginBottom: 50
  },
  progress: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    height: 20,
  },
  bar: {
    height: "100%",
    backgroundColor: '#1e90ff'
  }

}); 