import React, { Component } from "react";
import { Container, Header, Title, Button, Icon, Left, Right, Body } from "native-base";


export default class HeaderSpan extends Component {
  render() {
    return (
      <Container>
        <Header span>
          <Left>
            <Button transparent>
              <Icon name="book" />
            </Button>
          </Left>
          <Body>
            <Title>TRAVELLA</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}