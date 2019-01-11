import { StyleSheet, View, Text, NavigatorIOS } from 'react-native';
import React, { Component } from 'react';
import { Container, Content, Button, Icon } from 'native-base'
import Signupbutton from './Src/Signupbutton'
import SignInButton from './Src/SignInButton'
import Header from './Src/Header'
import Trip from './Trips/Trip'
import UserForm from './Src/UserForm'
import LoginModal from './Src/LoginModal'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';



class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Container>
        <Header />
        <SignInButton onPress={() => this.props.navigation.navigate('Trips')}/>
        {/* /<LoginModal /> */}
        <Signupbutton onPress={() => this.props.navigation.navigate('SignUpForm')}/>
        </Container>
      </View>
    );
  }
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
  Trips: {
    screen: Trip,
  },
  SignUpForm: {
    screen: UserForm,
  },
}, {
    initialRouteName: 'Home',
});


  
export default createAppContainer(AppNavigator); 



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});