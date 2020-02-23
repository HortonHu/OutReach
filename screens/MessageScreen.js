import React from 'react';
import { Text, View, Linking, TouchableOpacity } from "react-native";

export default class MessageScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("smsto:?addresses=null")
          }}>
          <Text>Send Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("sms")
          }}>
          <Text>Check Message</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

MessageScreen.navigationOptions = {
  title: 'Message',
};
