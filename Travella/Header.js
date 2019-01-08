import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text } from 'native-base'



export default class ThumbnailExample extends Component {
    render() {
      const uri = "/Logo.png";
      return (
        <Container>
          <Header />
          <Content>
            <Text>LOGO</Text>
            <Thumbnail square large source={{uri: uri}} />
          </Content>
        </Container>
      );
    }
  }
