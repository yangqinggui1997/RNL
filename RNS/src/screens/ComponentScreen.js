import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ComponentScreen = () => {
    const name = "Yang"
    return <View>
            <Text style={styles.text}>This is Components</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
}


const styles = StyleSheet.create({
    text: {
      fontSize: 30,
    },
    subHeaderStyle: {
        fontSize: 20
    }
  });

export default ComponentScreen
