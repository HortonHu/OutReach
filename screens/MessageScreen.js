import React from 'react';
import { Text, View, Linking, TouchableOpacity, StyleSheet } from "react-native";

export default class MessageScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("smsto:?addresses=null")
          }}
          style={styles.sendSms}
        >
          <Text style={styles.text}>Send Message</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Linking.openURL("sms:911")
          }}
          style={styles.sendEmSms}
        >
          <Text style={styles.textEm}>Send Emergency Message</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

MessageScreen.navigationOptions = {
  title: 'Message',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  sendSms: {
    // marginRight:10,
    alignItems:'center',
    justifyContent:'center',
    width: 200,
    height:200,
    backgroundColor:'green',
    borderColor:'black',
    borderStyle:'solid',
    borderRadius:100,
    paddingBottom:2
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  sendEmSms: {
    marginRight:10,
    alignItems:'center',
    justifyContent:'center',
    width: 200,
    height:200,
    backgroundColor:'red',
    borderColor:'black',
    borderStyle:'solid',
    borderRadius:100,
    paddingBottom:2
  },
  textEm: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
