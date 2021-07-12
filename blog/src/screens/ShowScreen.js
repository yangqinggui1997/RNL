import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Context } from '../context/BlogContext'

const ShowScreen = (props) => {
    const {state} = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === props.navigation.getParam('id'))

    return <View>
        <Text style={style.text}><Text style={style.title}>Title:</Text> {blogPost.title}</Text>
        <Text style={style.text}><Text style={style.title}>Content:</Text> {blogPost.content}</Text>
    </View>
}

const style = StyleSheet.create({
    title: {
        fontWeight: 'bold'
    },
    text: {
        margin: 10
    }
})

export default ShowScreen
