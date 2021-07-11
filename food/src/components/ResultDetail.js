import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ResultDetail = (props) => {
    return <View style={style.container}>
        <Image style={style.image} source={{uri: props.result.image_url}}/>
        <Text style={style.name}>{props.result.name}</Text>
        <Text>{props.result.rating} Stars, {props.result.review_count} Reviews</Text>
    </View>
}

const style = StyleSheet.create({
    container:
    {
        marginLeft: 15
    },
    image:
    {
        width: 250,
        height: 120,
        borderRadius: 4,
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultDetail
