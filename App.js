import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './app/views/Home.js';
import Header from './app/sections/Header.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
