import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const BlogPostForm = (props) => {
    const [title, setTitle] = useState(props.initialValues.title);
    const [content, setContent] = useState(props.initialValues.content);
    return <View>
        <Text style={style.label}>Enter Title: </Text>
        <TextInput value={title} style={style.input} onChangeText={text => setTitle(text)}/>
        <Text style={style.label}>Enter Content: </Text>
        <TextInput value={content} style={style.input} onChangeText={text => setContent(text)}/>
        <Button title="Save blog post" onPress={() => {
                props.onSubmit({title: title, content: content})
            }
        }/>
    </View>
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '', 
        content: ''
    }
}
const style = StyleSheet.create({
    input: {
        fontSize: 18,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label:
    {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5
    }
})

export default BlogPostForm
