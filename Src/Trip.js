import React, { Component } from 'react';
import { StyleSheet, View, Text, NavigatorIOS } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';


export default class Trip extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi6xf-zguLfAhXDz4MKHSGGBcwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.perfectdailygrind.com%2F2018%2F06%2Fwhy-taiwans-high-mountain-oolong-tea-is-brewing-up-a-storm%2F&psig=AOvVaw1Czsx2vlfe_O6pUXtCyjWh&ust=1547168602353719' }} />
              </Left>
              <Body>
                <Text>Taiwan</Text>
                <Text note numberOfLines={1}>1.1.18 | 1.12.18</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi6xf-zguLfAhXDz4MKHSGGBcwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.perfectdailygrind.com%2F2018%2F06%2Fwhy-taiwans-high-mountain-oolong-tea-is-brewing-up-a-storm%2F&psig=AOvVaw1Czsx2vlfe_O6pUXtCyjWh&ust=1547168602353719' }} />
              </Left>
              <Body>
                <Text>Paris</Text>
                <Text note numberOfLines={1}>1.1.18 | 1.12.18</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi6xf-zguLfAhXDz4MKHSGGBcwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.perfectdailygrind.com%2F2018%2F06%2Fwhy-taiwans-high-mountain-oolong-tea-is-brewing-up-a-storm%2F&psig=AOvVaw1Czsx2vlfe_O6pUXtCyjWh&ust=1547168602353719' }} />
              </Left>
              <Body>
                <Text>Curacao</Text>
                <Text note numberOfLines={1}>1.1.18 | 1.12.18</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi6xf-zguLfAhXDz4MKHSGGBcwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.perfectdailygrind.com%2F2018%2F06%2Fwhy-taiwans-high-mountain-oolong-tea-is-brewing-up-a-storm%2F&psig=AOvVaw1Czsx2vlfe_O6pUXtCyjWh&ust=1547168602353719' }} />
              </Left>
              <Body>
                <Text>Puerto Rico</Text>
                <Text note numberOfLines={1}>1.1.18 | 1.12.18</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

          </List>
        </Content>
      </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0da6a6'
  },
});