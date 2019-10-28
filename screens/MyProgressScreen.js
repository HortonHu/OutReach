import React, { Component } from 'react';
import { Platform, Dimensions, StyleSheet, Button, Alert, View, Text } from 'react-native';
import {LineChart} from 'react-native-chart-kit';
export default class MyProgressScreen extends React.Component {

/*
Notes:
As of 9/23/19:
  Need to add:
    • Read in data from file w/ fetch?
    • Figure out how to title axes (might have to switch chart libraries)
    • Set y-axis increments?

+Maybe use highcharts or fusioncharts(https://www.fusioncharts.com/react-native-charts)
*/

  render() {
    const data = {
      labels: ['5', '10', '15', '20', '25', '30'],
      datasets: [
        {
          data: [ 24, 35, 40, 60, 55, 90 ],
          color: () => '#ffd700',
          strokeWidth: 2 // optional
        },
        {
          data: [ 30, 45, 45, 55, 65, 100 ],
          color: () => '#1e90ff',
          strokeWidth: 2 // optional
          }
      ]
    }
    return (
      <View style = {styles.contentContainer}>
        <Text style={styles.pageTitle}>
          Progress Over Time
        </Text>
        <LineChart
        data = {data}
        width = {Dimensions.get('window').width}
        height = {480}
        fromZero = {true}
        yAxisLabel = {'%'}
        chartConfig={{
          backgroundColor: "#FFF",
          backgroundGradientFrom: '#FFF',
          backgroundGradientTo: '#FFF',
          decimalPlaces: 0,
          color: () => 'black',
          strokeWidth: 2
        }}
        />
        <Text style = {styles.legend}>
          Legend
        </Text>
        <Text style = {styles.reps}>
          Gold: Reps Completed (%)
        </Text>
        <Text style = {styles.mood}>
          Blue: Mood
        </Text>
      </View>

    );
  }
}

MyProgressScreen.navigationOptions = {
  title: 'My Progress',
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 30,
    flex: 1,
  },
  pageTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    color: 'black',
  },
legend: {
  fontSize: 18,
  textAlign: 'center',
  fontWeight: 'bold',
  alignItems: 'center',
  color: 'black',
},
reps: {
  fontSize: 14,
  textAlign: 'center',
  fontWeight: 'bold',
  alignItems: 'center',
  color: '#ffd700',
},
mood: {
  fontSize: 14,
  textAlign: 'center',
  fontWeight: 'bold',
  alignItems: 'center',
  color: '#1e90ff',
}
});

