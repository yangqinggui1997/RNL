import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

const ImageDetail = (props) => {
    return <View>
            <Image source={props.imageSource}/>
            <Text>{props.title}</Text>
            <Text>Image score -  {props.score}</Text>
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

export default ImageDetail
