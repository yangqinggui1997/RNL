import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = props => {
  
    return <View>
        <Text style={styles.text}>This is HomeScreen</Text>
        <Button 
        onPress={() => props.navigation.navigate('Components')}
        title="Go to ComponentScreen"/>
        <Button 
        onPress={() => props.navigation.navigate('ListScreen')}
        title="Go to ListScreen"/>
        <Button 
        onPress={() => props.navigation.navigate('ImageScreen')}
        title="Go to ImageScreen"/>
        <Button 
        onPress={() => props.navigation.navigate('CounterScreen')}
        title="Go to CounterScreen"/>
        <Button 
        onPress={() => props.navigation.navigate('ColorScreen')}
        title="Go to ColorScreen"/>
        <Button 
        onPress={() => props.navigation.navigate('SquareScreen')}
        title="Go to SquareScreen"/>
        <Button 
        onPress={() => props.navigation.navigate('TextScreen')}
        title="Go to TextScreen"/>
        <Button 
        onPress={() => props.navigation.navigate('BoxScreen')}
        title="Go to BoxScreen"/>
        {/* <TouchableOpacity
        onPress={() => props.navigation.navigate('ListScreen')}
        >
          <Text style={styles.touchableStyle}>Go to ListScreen</Text>
        </TouchableOpacity> */}
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  touchableStyle:{
    fontSize: 20,
    backgroundColor: 'green',
    textAlign: 'center',
    padding: 5
  }
});

export default HomeScreen;
