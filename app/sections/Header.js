import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './Menu';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn: false
        };
    }

    toggleUser = () => {
        this.setState(previous => {
            return { isLoggedIn: !previous.isLoggedIn };
        })
    }

    render() {
        let display = this.state.isLoggedIn ? 'Username' : 'Login'
        return (
            <View style={styles.headerView}>
                <Text 
                    style={styles.headerText}
                    onPress={this.toggleUser}>{display}
                </Text>
                <Menu/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
      textAlign: 'right',
      fontSize: 20,
      color: '#fff',
      paddingRight: 20,
    },
    headerView: {
        backgroundColor: '#35605a',
        paddingTop: 30,
        paddingBottom: 20,
        flex: 0
    }
  });
  