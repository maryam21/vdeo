import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            platformVersion: Platform.Version
        }
    }

    render(){
        return (
            <Text style={styles.text}>Home: {this.state.platformVersion}</Text>
        );
    }
}

const styles = StyleSheet.create({
    text: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });