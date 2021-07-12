import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = (props) => {
    const [result, setResult] = useState(null)
    const id = props.navigation.getParam('id')

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, [])

    return !result ? null : <View>
        <Text>{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item, index}) => {
                return item ? <Image style={style.image} source={{uri: item}}/> : null
            }}
        />
    </View>
}

const style = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        margin: 10
    }
})

export default ResultsShowScreen
