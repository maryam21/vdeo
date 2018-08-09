import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default class Menu extends React.Component{
    registration = () => {
        Alert.alert('tapped');
    }

    render() {
        return (
            <View>
                <TouchableOpacity>
                    <Text 
                        style={styles.button}
                        onPress={this.registration}>Register
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