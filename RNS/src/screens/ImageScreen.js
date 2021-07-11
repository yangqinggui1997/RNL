import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return <View>
            <ImageDetail title="Forest" imageSource={require('../../assets/images/forest.jpg')} score={8}/>
            <ImageDetail title="Beach" imageSource={require('../../assets/images/beach.jpg')} score={9}/>
            <ImageDetail title="Mountain" imageSource={require('../../assets/images/mountain.jpg')} score={10}/>

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

export default ImageScreen
