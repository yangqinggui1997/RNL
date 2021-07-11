import React from 'react'
import { useReducer } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native'

const TextScreen = (props) => {
    const reducer = (state, action) => {
        switch(action.type)
        {
            case 'input_name': return {...state, name: action.payload};
            default: return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, {name: "Anthony Yang"});
    const {name} = state;
    return <View>
        <Text>Enter Password: </Text>
        <TextInput 
        style={styles.input} 
        autoCapitalize="none" 
        autoCorrect={false} 
        // value="Please input"
        onChangeText={newName => dispatch({type: 'input_name', payload: newName})}
        />
        {name.length < 4 ? <Text>Password must be 4 characters</Text> : null}
    </View>
}

const styles = StyleSheet.create({
    input: {
      margin: 15,
      borderColor: 'black',
      borderWidth: 1
    }
  });

export default TextScreen
