import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <View style={styles.viewTwoParentStyle}>
          <Text style={styles.textTwoStyle}>Child #2</Text>
        </View>
        <Text style={styles.textThirdStyle}>Child #3</Text>
    </View>
}
const styles = StyleSheet.create({
    // viewStyle: {
    //   borderWidth: 3,
    //   borderColor: 'black',
    //   height: 200,
    //   flexDirection: 'row'
    // },
    // textOneStyle: {
    //   borderWidth: 3,
    //   borderColor: 'red',
    //   flex: 4
    // },
    // textTwoStyle: {
    //   borderWidth: 3,
    //   borderColor: 'red',
    //   flex: 6
    // },
    // textThirdStyle: {
    //   borderWidth: 3,
    //   borderColor: 'red',
    //   flex: 5
    // }
    // viewStyle: {
    //   borderWidth: 3,
    //   borderColor: 'black',
    //   height: 200,
    //   alignItems: 'center'
    // },
    // textOneStyle: {
    //   borderWidth: 3,
    //   borderColor: 'red'
    // },
    // textTwoStyle: {
    //   borderWidth: 3,
    //   borderColor: 'red',
    //   alignSelf: 'flex-end'
    // },
    // textThirdStyle: {
    //   borderWidth: 3,
    //   borderColor: 'red'
    // }
    viewStyle: {
      borderWidth: 3,
      borderColor: 'black',
      height: 200,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    viewTwoParentStyle: {
      height: 100,
      justifyContent: 'flex-end'
    },
    textOneStyle: {
      height: 50,
      width: 50,
      backgroundColor: 'red'
    },
    textTwoStyle: {
      height: 50,
      width: 50,
      backgroundColor: 'green'
    },
    textThirdStyle: {
      height: 50,
      width: 50,
      backgroundColor: 'blue'
    }
  });
export default BoxScreen
