import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
            <Text onPress={this.toggleUser}>{display}</Text>
        );
    }
}