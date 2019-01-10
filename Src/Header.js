import React, { Component } from "react";
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import { Container, Header, Title, Button, Icon,  Left, Right, Body } from "native-base";

export default class HeaderComp extends Component {

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.loginContainer}>
                    <Image resizeMode="stretch" style={styles.logo} source={require('../Logo.png')} />
                </View>
            </KeyboardAvoidingView>
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 375,
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 425,
        height: 150
    }
  })