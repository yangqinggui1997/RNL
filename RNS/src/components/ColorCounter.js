import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const ColorCounter = (props) => {
    return <View>
            <Text>{props.color}</Text>
            <Button title={"Increase " + props.color} onPress={() => props.onIncrease()}/>
            <Button title={"Descrease " + props.color} onPress={() => props.onDescrease()}/>
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

export default ColorCounter
