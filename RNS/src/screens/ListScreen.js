import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: 20},
        {name: 'Friend #2', age: 21},
        {name: 'Friend #3', age: 22},
        {name: 'Friend #4', age: 23},
        {name: 'Friend #5', age: 24},
        {name: 'Friend #6', age: 25},
        {name: 'Friend #7', age: 26},
        {name: 'Friend #8', age: 27},
        {name: 'Friend #9', age: 28},
    ] 
    return <FlatList 
        // horizontal
        // showsHorizontalScrollIndicator={false}
        keyExtractor={friend => friend.name}
        data={friends} 
        renderItem={({item, index}) => {
            return <Text style={styles.text}>
            {item.name} - Age {item.age}
            </Text>
    }}/>
}


const styles = StyleSheet.create({
    text: {
    //   fontSize: 30,
        marginVertical:50
    },
    subHeaderStyle: {
        fontSize: 20
    }
  });

export default ListScreen
