import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Text } from 'native-base'


export default class ButtonIconExample extends Component {
  render() {
    return (
      <Container style={{
        padding: 0
      }}>
        <Content style={{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100, 
        backgroundColor: 'white',
      }}>
          <Button onPress = { this.props.onPress }
            iconRight bordered dark style={{
            backgroundColor:'#5EB5BE',
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
            width: 280

          }}>

            <Text>Sign In</Text>
            <Icon name='ios-person' />
          </Button>
        </Content>
        </Container>
    )}
};

