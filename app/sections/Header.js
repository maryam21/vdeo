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

    }

    render() {
        let display = this.state.isLoggedIn ? 'Username' : 'Login'
        return (
            <Text>{display}</Text>
        );
    }
}