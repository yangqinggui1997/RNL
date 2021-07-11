import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultDetail from './ResultDetail'

const ResultsList = (props) => {
    return !props.results.length  ? null : <View style={style.container}>
        <Text style={style.titleStyle}>{props.title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={props.results}
            keyExtractor={result => result.id}
            renderItem={({item, index}) => {
                return <TouchableOpacity onPress={() => props.navigation.navigate('ResultShow', {id: item.id})}>
                    <ResultDetail result={item}/>
                </TouchableOpacity>
            }}
        />
        <Text>Results: {props.results.length}</Text>
    </View>
}

const style = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container:
    {
        marginBottom: 10
    }
})

export default withNavigation(ResultsList)
