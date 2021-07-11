import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = (props) => {
  const COLOR_INCREMENT = 15;
  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);

  // const setColor = (color, change) => {
  //   switch(color)
  //   {
  //     case 'red':
  //       red + change > 255 || red + change < 0 ? null : setRed(red + change)
  //       return
  //     case 'green':
  //       green + change > 255 || green + change < 0 ? null : setGreen(green + change)
  //       return
  //     case 'blue':
  //       blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
  //       return
  //     default: return
  //   }
  // }
  //   return <View>
  //           <ColorCounter 
  //           onIncrease={() => setColor('red', COLOR_INCREMENT)}
  //           onDescrease={() => setColor('red', -1*COLOR_INCREMENT)}
  //           color="Red"/>
  //           <ColorCounter 
  //           onIncrease={() => setColor('green', COLOR_INCREMENT)}
  //           onDescrease={() => setColor('green', -1*COLOR_INCREMENT)}
  //           color="Green"/>
  //           <ColorCounter 
  //           onIncrease={() => setColor('blue', COLOR_INCREMENT)}
  //           onDescrease={() => setColor('blue' -1*COLOR_INCREMENT)}
  //           color="Blue"/>

  //           <View style={{
  //             height:150,
  //             width:150,
  //             backgroundColor: `rgb(${red}, ${green}, ${blue})`
  //           }}>

  //           </View>
  //       </View>
  const reducer = (state, action) => {
    switch(action.type)
    {
      case 'red':
        return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {...state, red: state.red + action.payload}
      case 'green':
        return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {...state, green: state.green + action.payload};
      case 'blue':
        return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : {...state, blue: state.blue + action.payload};
      default: return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const {red, green, blue} = state;
  return <View>
            <ColorCounter 
            onIncrease={() => dispatch({type: 'red', payload:  COLOR_INCREMENT})}
            onDescrease={() => dispatch({type: 'red', payload:  -1*COLOR_INCREMENT})}
            color="Red"/>
            <ColorCounter 
            onIncrease={() => dispatch({type: 'green', payload: COLOR_INCREMENT})}
            onDescrease={() => dispatch({type: 'green', payload: -1*COLOR_INCREMENT})}
            color="Green"/>
            <ColorCounter 
            onIncrease={() => dispatch({type: 'blue', payload: COLOR_INCREMENT})}
            onDescrease={() => dispatch({type: 'blue', payload: -1*COLOR_INCREMENT})}
            color="Blue"/>

            <View style={{
              height:150,
              width:150,
              backgroundColor: `rgb(${red}, ${green}, ${blue})`
            }}>

            </View>
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

export default SquareScreen
