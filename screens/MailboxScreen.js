import React from 'react';
import { Text, View } from "react-native";

export default class MailboxScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Mailbox Screen</Text>
      </View>
    );
  }
}

MailboxScreen.navigationOptions = {
  title: 'Mailbox',
};
