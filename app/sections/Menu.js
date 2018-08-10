import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Menu extends React.Component{
    render() {
        return (
            <View>
                <TouchableOpacity>
                    <Text 
                        style={styles.button}
                        onPress={this.props.navigation('RegisterRT')}
                        >Register
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
      textAlign: 'left',
      fontSize: 20,
      color: '#fff',
      paddingLeft: 20
    }
  });