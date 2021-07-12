import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Context } from '../context/BlogContext'

const ShowScreen = (props) => {
    const {state} = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === props.navigation.getParam('id'))

    return <View>
        <Text>{blogPost.title}</Text>
    </View>
}

const style = StyleSheet.create({})

export default ShowScreen
