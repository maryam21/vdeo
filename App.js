import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import StackNavigator from 'react-navigation';
import Home from './app/views/Home';
import Header from './app/sections/Header';

const Routes = StackNavigator({
  HomeRT: {
    screen: Home
  },
  RegisterRT: {
    screen: Register
  }
},
  {
    initialRouteName: 'HomeRT'
  }
)
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
