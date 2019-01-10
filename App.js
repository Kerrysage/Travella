import { StyleSheet, View, Text, NavigatorIOS } from 'react-native';
import React, { Component } from 'react';
import { Container, Content, Button, Icon } from 'native-base'
import Signupbutton from './Src/Signupbutton'
import SignInButton from './Src/SignInButton'
import Header from './Src/Header'



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>TRAVELLA</Text>
        <Header />
        <Container>
        <SignInButton />
        <Signupbutton />
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});