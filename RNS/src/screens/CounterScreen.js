import React from 'react';
import { useReducer } from 'react';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const CounterScreen = (props) => {
  const reducer = (state, action) => {
    switch(action.type)
    {
      case 'increase': case 'descrease':
        return {...state, count: state.count + action.payload}
      default: return state
    }
  }
    // const [counter, setCounter] = useState(0);
    // return <View>
    //         <Button 
    //         title="Increase"
    //         onPress={() => setCounter(counter + 1)}/>
    //         <Button 
    //         title="Descrease"
    //         onPress={() => setCounter(counter - 1)}/>
    //         <Text>Current count: {counter}</Text>
    //     </View>
    const [state, dispatch] = useReducer(reducer, {count: 0})
    const {count} = state
    return <View>
            <Button 
            title="Increase"
            onPress={() => dispatch({type: 'increase', payload: 5})}/>
            <Button 
            title="Descrease"
            onPress={() => dispatch({type: 'descrease', payload: -5})}/>
            <Text>Current count: {count}</Text>
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

export default CounterScreen
