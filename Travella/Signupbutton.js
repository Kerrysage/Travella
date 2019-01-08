import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Text } from 'native-base'


export default class ButtonIconExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
        <Button iconLeft light>
            <Icon name='book' />
            <Text>Sign In</Text>
          </Button>
          <Button iconRight light>
            <Text>Sign Up</Text>
            <Icon name='arrow-forward' />
          </Button>
        </Content>
        </Container>
    )}
};