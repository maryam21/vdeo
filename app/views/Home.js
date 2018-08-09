import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component{
    render(){
        return (
            <Text style={styles.text}>Home</Text>
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