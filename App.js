import { StyleSheet, View, Text } from 'react-native';
import React, { Component } from 'react';
import { Container, Content, Button, Icon } from 'native-base'
import Signupbutton from './Travella/Signupbutton'
import Header from './Travella/Header'



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>TRAVELLA</Text>
        <Signupbutton />
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});